import { url } from "../List";

type Props = {
  productID: number;
  onDeleted: (productID: number) => void;
};

const Delete = ({ productID, onDeleted }: Props) => {
  const handleDelete = async (id: number) => {
    try {
      if (!confirm("Are you sure you want to delete this product?")) {
        return;
      }
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network like shit!");
      }
      if (onDeleted && typeof onDeleted === "function") {
        onDeleted(productID);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={() => handleDelete(productID)}
    >
      Delete
    </button>
  );
};

export default Delete;
