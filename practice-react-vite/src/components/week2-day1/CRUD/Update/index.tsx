import React from "react";
import { url, type Product } from "../List";

type Props = {
  productID: number;
  onUpdated?: (product: Product) => void;
  onClose?: () => void;
};

const Update = ({ productID, onUpdated, onClose }: Props) => {
  const [formData, setFormData] = React.useState({
    title: "",
    price: "",
    description: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/${productID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          price: parseFloat(formData.price),
          description: formData.description,
          categoryId: 15, // hardcoded tạm
          images: ["https://placeimg.com/640/480/any"],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const data = await response.json();
      setFormData({
        title: "",
        price: "",
        description: "",
      });
      alert("Product updated successfully!");
      if (onUpdated && typeof onUpdated === "function") {
        onUpdated(data);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  React.useEffect(() => {
    try {
      const fetchProductData = async () => {
        const response = await fetch(`${url}/${productID}`);
        if (!response.ok) {
          throw new Error("Network like shit!");
        }
        const data = await response.json();
        return data;
      };
      fetchProductData().then((data) => {
        if (data) {
          setFormData({
            title: data.title || "",
            price: data.price || "",
            description: data.description || "",
          });
        }
      });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }, [productID]);
  return (
    <div className="fixed w-md mx-auto inset-0 flex items-center justify-center z-50">
      {
        /* Create tailwindcss Update Form (title, price, description) */
        <form
          onSubmit={handleSubmit}
          className="w-full p-4 bg-white rounded shadow mb-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Update Product
            </button>
          </div>
        </form>
      }
    </div>
  );
};

export default Update;
