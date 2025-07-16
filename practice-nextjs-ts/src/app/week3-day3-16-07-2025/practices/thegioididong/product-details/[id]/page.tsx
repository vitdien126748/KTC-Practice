import Image from "next/image";
import { baseUrl } from "../../type";
import Link from "next/dist/client/link";

export const dynamic = "force-static";

export const generateStaticParams = async () => {
  const response = await fetch(`${baseUrl}?offset=0&limit=30`);
  const products = await response.json();

  return products.slice(0, 10).map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
};

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const response = await fetch(`${baseUrl}/${id}`, {
    next: { revalidate: 60 },
  });
  const product = await response.json();

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm mt-10 max-w-4xl mx-auto p-4">
      <Link
        href="/week3-day3-16-07-2025/practices/thegioididong"
        className="text-blue-500 hover:underline pb-4 pl-2"
      >
        Back
      </Link>
      <div className="flex">
        <div className="aspect-square">
          <Image
            src={product.images[0]}
            alt={product.title}
            className=" object-cover rounded-lg mb-4"
            width={400}
            height={400}
          />
        </div>
        <div className="flex-1 ml-4">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg font-semibold mb-4">{product.price} VND</p>
          <p className="text-gray-600 ">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
