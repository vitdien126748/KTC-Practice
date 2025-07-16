import React from "react";
import { baseUrl, Product } from "../type";
import ProductCard from "./ProductCard";

export const dynamic = "force-static";

const ProductGrid = async () => {
  const response = await fetch(`${baseUrl}?offset=0&limit=10`, {
    next: {
      revalidate: 60, // Revalidate every 60 seconds
    },
  });
  const products: Product[] = await response.json();
  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm p-4 ">
      <h1 className="text-2xl font-bold mb-4">Khuyến mãi Online</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
