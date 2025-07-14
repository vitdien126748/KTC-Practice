import React from "react";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js and TypeScript",
      excerpt:
        "Learn how to build modern web applications with Next.js and TypeScript for better development experience.",
      date: "July 10, 2025",
      author: "John Doe",
      readTime: "5 min read",
      category: "Development",
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies that will shape the future of web development in 2025 and beyond.",
      date: "July 8, 2025",
      author: "Jane Smith",
      readTime: "8 min read",
      category: "Technology",
    },
    {
      id: 3,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt:
        "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
      date: "July 5, 2025",
      author: "Mike Johnson",
      readTime: "6 min read",
      category: "Design",
    },
    {
      id: 4,
      title: "State Management in React Applications",
      excerpt:
        "A comprehensive guide to managing state in React applications using modern patterns and libraries.",
      date: "July 2, 2025",
      author: "Sarah Wilson",
      readTime: "10 min read",
      category: "React",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest insights, tutorials, and industry trends
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm ml-auto">
                  {post.date}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-indigo-600 cursor-pointer transition-colors duration-200">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-medium text-sm">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="ml-2 text-sm text-gray-700">
                      {post.author}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
          Load More Posts
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
