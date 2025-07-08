import { BrowserRouter, Routes, Route } from "react-router";
import ProductPage from "./Pages/ProductPage/ProductPage";
import NavBar from "./NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CustomerPage from "./Pages/CustomerPage/CustomerPage";

const MultiPageProductListingApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="bg-gray-50 min-h-screen pt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default MultiPageProductListingApp;
