import Link from "next/dist/client/link";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaHeadphonesAlt, FaSimCard } from "react-icons/fa";
import { BsCart3, BsSmartwatch, BsTabletLandscape } from "react-icons/bs";
import { CiLocationOn, CiLaptop } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { FiWatch } from "react-icons/fi";
import { RiContractFill } from "react-icons/ri";
import { TbDeviceDesktopDollar } from "react-icons/tb";
import Image from "next/image";

const NavItems = [
  { title: "Điện Thoại", icon: <IoIosPhonePortrait /> },
  { title: "Laptop", icon: <CiLaptop /> },
  { title: "Phụ Kiện", icon: <FaHeadphonesAlt /> },
  { title: "Smartwatch", icon: <BsSmartwatch /> },
  { title: "Đồng hồ", icon: <FiWatch /> },
  { title: "Tablet", icon: <BsTabletLandscape /> },
  { title: "Máy cũ, Thu cũ", icon: <IoIosPhonePortrait /> },
  { title: "Màn hình, Máy in", icon: <TbDeviceDesktopDollar /> },
  { title: "Sim, Thẻ cào", icon: <FaSimCard /> },
  { title: "Dịch vụ tiện ích", icon: <RiContractFill /> },
];

export default function ThegioididongLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-50">
      <div>
        <Banner />
        <Header />
      </div>
      <main className=" mx-auto px-4">{children}</main>
    </section>
  );
}

const Banner = () => {
  return (
    <div className="flex justify-center mx-auto bg-[#ffee5f] h-[50px]">
      <Image
        width={1200}
        height={50}
        priority={true}
        src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/e4/d2/e4d215b404d123b25e8b8f5c01ac2f56.png"
        alt="banner"
      />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-[#ffd400]  p-4 pb-1">
      <div className="flex flex-col justify-between items-center w-[1200px] mx-auto">
        <div className="flex items-center justify-between w-[100%]">
          <Link href="/week3-day3-16-07-2025/practices/thegioididong">
            <Image
              width={228}
              height={40}
              src="/Images/thegioididonglogo.png"
              alt="Thegioididong Logo"
              className="h-12 pr-2"
            />
          </Link>
          {/* Search Bar */}
          <div className="flex items-center w-[415px]  ml-auto space-x-1 bg-white rounded-4xl p-2.5">
            <button className="text-gray-600 hover:text-gray-800 text-xl">
              <CiSearch />
            </button>
            <input
              type="text"
              placeholder="Bạn tìm gì ..."
              className="focus:outline-none text-[14px] text-gray-600 placeholder-gray-400"
            />
          </div>
          {/* Button Login */}
          <button className="flex items-center rounded-full px-1 py-2.5 hover:bg-[#ffee99] ml-4">
            <span className="text-[18px] pr-2">
              <FaRegUser />
            </span>
            Đăng Nhập
          </button>
          {/* Button Cart */}
          <button className="flex items-center rounded-full px-2 py-2.5 hover:bg-[#ffee99] ml-4">
            <span className="text-[18px] pr-2">
              <BsCart3 />
            </span>
            Giỏ Hàng
          </button>
          {/* Button Location */}
          <button className="flex items-center justify-between rounded-full px-2 py-2.5 w-60 bg-[#ffe14c] hover:bg-[#ffee99] ml-4">
            <span className="text-[22px] pr-2 flex items-center">
              <CiLocationOn />
              <span className="text-[17px] pl-1">Hồ Chí Minh</span>
            </span>
            <span>{">"}</span>
          </button>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-[1200px] mx-auto ">
      <ul className="flex items-center justify-evenly w-[1200px] mx-auto ">
        {NavItems.map((item, index) => (
          <li key={index} className="inline-block">
            <NavItem title={item.title} icon={item.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
  return (
    <span className=" hover:bg-[#ffee99] flex items-center px-2.5 py-2 rounded-lg">
      {icon}
      {title}
    </span>
  );
};
