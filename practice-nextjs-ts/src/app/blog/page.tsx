const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt:
        "Learn the basics of Next.js and how to build modern web applications.",
      date: "July 14, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt:
        "Discover advanced techniques for creating beautiful UIs with Tailwind CSS.",
      date: "July 12, 2025",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Building Responsive Layouts",
      excerpt:
        "Best practices for creating layouts that work on all device sizes.",
      date: "July 10, 2025",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and insights from our team.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                Read more →
              </button>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Load More Posts
          </button>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
