import ProductGrid from "./components/ProductGrid";
import Image from "next/image";

const ThegioididongPage = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto w-[1200px]">
        <ProductGrid />
      </div>
    </div>
  );
};

export default ThegioididongPage;

const Banner = () => {
  return (
    <div className="flex justify-center mx-auto p-6 ">
      <Image
        width={1200}
        height={260}
        src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/b6/dd/b6dd779ce5e8a918cc4f557fce984b16.png"
        alt="banner"
        className="w-[1200px] h-auto rounded-lg"
      />
    </div>
  );
};
