import React from "react";
import ProductGrid from "./ProductGrid/ProductGrid";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

export type Product = {
  id: number;
  title: string;
  category: Category;
  images: string[];
  price: number;
};
export type Category = {
  id: number;
  name: string;
};

const ProductPage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = React.useState<number[]>(
    []
  );

  const handleCategoryFilter = (categoryId: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedCategories((prev) => [...prev, categoryId]);
    } else {
      setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
    }
  };

  React.useEffect(() => {
    // Simulate fetching categories from an API
    const fetchedCategoriesData = async () => {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchedCategoriesData();
  }, []);

  React.useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://api.escuelajs.co/api/v1/categories/${category.id}/products`
            );
            const data: Product[] = await res.json();
            return data;
          })
        );
        const merged = results.flat();
        setProducts(merged);
      } catch (err) {
        console.error("Lỗi khi fetch tất cả sản phẩm:", err);
      }
    };

    if (categories.length > 0) {
      fetchAllProducts();
    }
  }, [categories]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[1200px] mx-auto px-2 py-4">
      <FilterSidebar
        categories={categories}
        onCategoryFilter={handleCategoryFilter}
      />
      <div className="flex-1">
        {!products.length && (
          <div className="text-center mt-10">No products found</div>
        )}
        <ProductGrid
          products={products}
          selectedCategories={selectedCategories
            .map((id) => categories.find((cat) => cat.id === id))
            .filter((cat): cat is Category => cat !== undefined)}
        />
      </div>
    </div>
  );
};

export default ProductPage;
