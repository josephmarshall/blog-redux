class Api::PostsController < ApplicationController
  before_action :set_blog
  before_action :set_post, only: [:update, :destroy]

  def index
    posts = @blog.posts
    render json: posts
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: { errors: @blog.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @blog.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @post.destroy
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:body, :blog_id, :datePosted)
  end
  
  def set_blog
    @blog = Blog.find(params[:blog_id])
  end

  def set_post
    @post = Post.find(params[:id])
  end

end
