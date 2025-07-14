const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$199",
      image: "🎧",
      rating: 4.8,
      description: "High-quality wireless headphones with noise cancellation",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$299",
      image: "⌚",
      rating: 4.6,
      description: "Advanced fitness tracking and health monitoring",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: "$89",
      image: "💻",
      rating: 4.9,
      description: "Ergonomic aluminum laptop stand for better posture",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      price: "$49",
      image: "🖱️",
      rating: 4.7,
      description: "Precision wireless mouse with long battery life",
    },
    {
      id: 5,
      name: "USB-C Hub",
      price: "$79",
      image: "🔌",
      rating: 4.5,
      description: "Multi-port USB-C hub with HDMI and SD card slots",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: "$129",
      image: "🔊",
      rating: 4.8,
      description: "Portable speaker with rich sound and waterproof design",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collection of premium tech products
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.rating})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">
                  {product.price}
                </span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
