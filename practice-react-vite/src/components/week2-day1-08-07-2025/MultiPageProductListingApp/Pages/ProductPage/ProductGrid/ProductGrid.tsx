import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "./Pagination";
import type { Product, Category } from "../ProductPage";

type ProductGridProps = {
  products: Product[];
  selectedCategories: Category[];
};

const PRODUCTS_PER_PAGE = 8;

const ProductGrid = ({ products, selectedCategories }: ProductGridProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredProducts = !selectedCategories.length
    ? products
    : products.filter((product) =>
        selectedCategories.some(
          (category) => category.id === product.category.id
        )
      );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  React.useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  return (
    <div className="w-full bg-white bg-opacity-90 rounded-xl border-2 border-red-500 p-4">
      <h2 className="text-lg font-semibold mb-4 ml-2">Danh sách sản phẩm</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category.name}
            images={[product.images[0]]}
            price={product.price}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductGrid;
