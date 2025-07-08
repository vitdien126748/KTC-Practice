import { NavLink } from "react-router";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdClose } from "react-icons/md";
import {
  HiOutlineMap,
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineUserCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
  HiOutlinePlus,
} from "react-icons/hi2";

const navItems = [
  { to: "/", label: "Overview", icon: <HiOutlineHome className="w-5 h-5" /> },
  { to: "/map", label: "Map", icon: <HiOutlineMap className="w-5 h-5" /> },
  {
    to: "/departments",
    label: "Departments",
    icon: <HiOutlineBuildingOffice2 className="w-5 h-5" />,
  },
  {
    to: "/doctors",
    label: "Doctors",
    icon: <HiOutlineUserCircle className="w-5 h-5" />,
  },
  {
    to: "/history",
    label: "History",
    icon: <HiOutlineClipboardDocumentList className="w-5 h-5" />,
  },
  {
    to: "/settings",
    label: "Settings",
    icon: <HiOutlineCog6Tooth className="w-5 h-5" />,
  },
];

// Thêm props open, setOpen
const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-white border-r flex flex-col px-4 py-6
          transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:flex
        `}
      >
        {/* Close button mobile */}
        <button
          className="lg:hidden absolute top-4 right-4"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <MdClose className="w-7 h-7 text-purple-500" />
        </button>
        {/* Logo */}
        <div className="flex items-center mb-8 mt-2">
          <span className="inline-block w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg mr-2" />
          <span className="font-bold text-xl text-gray-800">H-care</span>
        </div>
        {/* Register Button */}
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg py-2 mb-6 shadow hover:from-purple-600 hover:to-indigo-600 transition">
          <HiOutlinePlus className="w-5 h-5" />
          <span className="hidden sm:inline">Register patient</span>
          <span className="sm:hidden">+</span>
        </button>
        {/* Nav */}
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-purple-50 transition ${
                      isActive ? "bg-purple-100 text-purple-700 font-bold" : ""
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="md:hidden">{item.label[0]}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Get mobile app */}
        <div className="mt-8 bg-purple-50 rounded-xl p-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-2">
            <MdOutlinePhoneAndroid className="w-8 h-8 text-purple-600" />
          </div>
          <div className="text-sm font-semibold mb-2 text-gray-700">
            Get mobile app
          </div>
          <div className="flex gap-2">
            <IoLogoGooglePlaystore className="w-7 h-7 text-blue-600" />
            <FaApple className="w-7 h-7 text-gray-800" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
