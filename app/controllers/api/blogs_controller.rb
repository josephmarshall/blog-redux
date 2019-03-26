class Api::BlogsController < ApplicationController
  before_action :set_blog, only: [:update, :destroy]

def index
  blogs = Blog.all
  render json: blogs
end

def create
  blog = Blog.new(blog_params)
  if blog.save
    render json: blog
  else
    render json: { errors: blog.errors.full_messages.join(',') }, status: 422
  end
end

def update
  if @blog.update(blog_params)
    render json: @blog
  else
    render json: { errors: @blog.errors.full_messages.join(',') }, status: 422
  end
end

def destroy
  @blog.destroy
  render json: @blog
end

private
  def blog_params
    params.require(:blog).permit(:name)
  end

  def set_blog
    @blog = Blog.find(params[:id])
  end

end
