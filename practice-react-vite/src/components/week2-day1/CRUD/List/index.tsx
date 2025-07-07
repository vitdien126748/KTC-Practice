import React from "react";
import Delete from "../Delete";
import Update from "../Update";

export const url = "https://api.escuelajs.co/api/v1/products";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

type Props = {
  reload: number;
};

const List = ({ reload }: Props) => {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network like shit!");
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [reload]);

  const handleOnDeleted = (productID: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productID)
    );
  };
  const handleOnSelected = (product: Product) => {
    setSelectedProduct(product);
  };
  const handleOnUpdated = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setSelectedProduct(null);
  };
  const handleOnClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto bg-white rounded shadow mb-4 p-4">
      <h2>Products</h2>
      {loading && <p>Hold up. Wait a minute!</p>}
      <table className=" table-auto w-full border-collapse border border-gray-400 table-hover">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-200">
              <td className="border border-gray-300 p-2 text-right">
                {product.id}
              </td>
              <td className="border border-gray-300 p-2">{product.title}</td>
              <td className="border border-gray-300 p-2 text-right">
                {product.price}
              </td>
              <td className="border border-gray-300 p-2">
                {product.description}
              </td>
              <td>
                <button
                  onClick={() => handleOnSelected(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <Delete productID={product.id} onDeleted={handleOnDeleted} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProduct && (
        <Update
          productID={selectedProduct.id}
          onUpdated={handleOnUpdated}
          onClose={handleOnClose}
        />
      )}
    </div>
  );
};

export default List;
