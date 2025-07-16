import Image from "next/image";
import { Product } from "../type";
import Link from "next/dist/client/link";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm p-4 h-110 flex flex-col justify-between">
      <div className="flex flex-col justify-between h-full">
        <div className="aspect-square">
          <Image
            src={product.images[0]}
            alt={product.title}
            className="w-full h-60 object-cover rounded-lg mb-4"
            width={200}
            height={150}
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
      </div>
      <Link
        href={`/week3-day3-16-07-2025/practices/thegioididong/product-details/${product.id}`}
        className="w-[100%] mt-4 bg-[#ffd400] py-2 px-4 rounded hover:bg-[#ffee99] transition-colors text-center text-black"
      >
        View
      </Link>
    </div>
  );
};

export default ProductCard;
