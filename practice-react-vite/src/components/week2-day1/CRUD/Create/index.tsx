import React from "react";
import { url } from "../List";

type Props = {
  onCreated?: () => void;
};

const Create = ({ onCreated }: Props) => {
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
      const response = await fetch(url + "/", {
        method: "POST",
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
        throw new Error("Failed to create product");
      }

      setFormData({
        title: "",
        price: "",
        description: "",
      });
      alert("Product created successfully!");
      if (onCreated && typeof onCreated === "function") {
        onCreated();
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <form
        className="space-y-4 w-full max-w-md mx-auto bg-white p-6 rounded shadow"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Create Product</h2>
        <div>
          <label className="block">Title</label>
          <input
            type="text"
            className="border p-2 w-full"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block">Price</label>
          <input
            type="number"
            className="border p-2 w-full"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block">Description</label>
          <textarea
            className="border p-2 w-full"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Create;
