import "./App.css";
// import Dashboard from "./components/week2-day1-08-07-2025/Dashboard";
// import MultiPageProductListingApp from "./components/week2-day1-08-07-2025/MultiPageProductListingApp";
// import Products from "./components/week2-day1/CRUD";
// import Weather from "./components/week2-day1/Weather";
// import SignForm from "./components/week2-day3-09-07-2025/Form/SignForm";
// import RegisterForm from "./components/week2-day3-09-07-2025/Form/RegisterForm";
// import LoginForm from "./components/week2-day3-09-07-2025/Form/LoginForm";
// import UserRegistrationForm from "./components/week2-day3-09-07-2025/UserRegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./components/week5-day1-04-08-2025/Dashboard";
import Login from "./components/week5-day1-04-08-2025/Login";
import Roles from "./components/week5-day1-04-08-2025/Roles";

function App() {
  return (
    <BrowserRouter>
      {/* Exercises */}
      {/* <Dashboard />
      <MultiPageProductListingApp />
      <Weather />
      <Products /> */}
      {/* <SignForm />
      <RegisterForm />
      <LoginForm />
      <UserRegistrationForm /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roles" element={<Roles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
