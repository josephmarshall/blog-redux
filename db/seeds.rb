  Blog.create(name: "horses")
  Blog.create(name: "What I want to do when I grow up")
  Blog.create(name: "favorite food")
  Blog.create(name: "Under the bed, and in the closet")

  Post.create(body: "The first post of the blog, welcome to blog app!", datePosted: Time.now, blog_id: 1)
  Post.create(body: "The first post of the blog, welcome to blog app!", datePosted: Time.now, blog_id: 2)
  Post.create(body: "The first post of the blog, welcome to blog app!", datePosted: Time.now, blog_id: 3)
  Post.create(body: "The first post of the blog, welcome to blog app!", datePosted: Time.now, blog_id: 4)

  puts "seeded."