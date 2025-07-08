type ProductCardProps = {
  title: string;
  category: string;
  images: string[];
  price: number;
};

const ProductCard = ({ title, category, images, price }: ProductCardProps) => {
  return (
    <div className="relative flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg transition p-4 h-full">
      <img
        src={images[0]}
        alt={title}
        className="w-28 h-28 object-contain mb-3"
        loading="lazy"
      />
      <div className="w-full flex-1 flex flex-col justify-between">
        <div className="text-sm font-semibold text-gray-800 mb-2 min-h-[40px]">
          {title}
        </div>
        <div className="text-xs text-gray-500 mb-2">{category}</div>
        <div className="flex items-end gap-2">
          <span className="text-base font-bold text-[#e53935]">
            {price.toLocaleString("vi-VN")}đ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
