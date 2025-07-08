import { Link, useLocation } from "react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/category", label: "Category" },
  { to: "/products", label: "Product" },
  { to: "/login", label: "Login" },
  { to: "/customer", label: "Customer" },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="bg-orange-500 text-white shadow">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-2">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-white mr-8"
          style={{ fontFamily: "Arial Black,Arial,sans-serif" }}
        >
          Magazines
        </Link>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-end items-center mt-2 sm:mt-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-3 py-1 rounded font-semibold transition ${
                    location.pathname === link.to
                      ? "bg-white text-orange-500"
                      : "hover:bg-orange-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/cart"
                className="flex items-center px-2 py-1 rounded hover:bg-orange-600 transition"
              >
                <span className="material-icons mr-1">shopping_cart</span>
                <span className="hidden sm:inline">0</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
