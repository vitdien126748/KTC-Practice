import SignUpForm from "./SignUpForm/SignUpForm";
import SignInForm from "./SignInForm/SignInForm";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home/Home";

const SignForm = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SignForm;
