import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TbHexagonLetterG } from "react-icons/tb";

const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Must be at least 5 characters")
    .test(
      "is-email-or-phone",
      "Must be a valid email or phone number",
      function (value) {
        if (!value) return false;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{9,15}$/;

        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be at least 8 characters")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s).{8,}$/,
      "Must contain at least 1 letter"
    ),
  rememberMe: yup.boolean().optional().default(false),
});

type LoginFormInput = {
  username: string;
  password: string;
  rememberMe: boolean;
};
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInput> = (data: LoginFormInput) => {
    console.log(data);
    alert("Login successful!");

    if (data.rememberMe) {
      localStorage.setItem(
        "savedLogin",
        JSON.stringify({
          username: data.username,
          password: data.password,
        })
      );
    } else {
      localStorage.removeItem("savedLogin");
    }
  };

  React.useEffect(() => {
    const saved = localStorage.getItem("savedLogin");
    if (saved) {
      const parsed = JSON.parse(saved);
      setValue("username", parsed.username);
      setValue("password", parsed.password);
    }
  }, [setValue]);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side*/}
        <div className="md:w-1/2 bg-[#ECF1F4] flex flex-col justify-center items-center p-8 relative">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-left w-full">
            Set Your Partner
            <br />
            Recruitment on Auto-Pilot
          </h2>
          <img
            src="https://nhannn87dn.github.io/ui-form-antd-yup/statics/img/grovia.png"
            alt="Grovia"
            className="w-100px h-100px md:w-150px md:h-150px lg:w-200px lg:h-200px"
          />
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="flex items-center justify-center mb-8">
            <TbHexagonLetterG className="w-12 h-12 text-red-600 mb-2" />
            <span className="text-[#192C48] font-semibold text-3xl pb-3">
              Grovia
            </span>
          </div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">Login</h2>
          <div className="mb-6">
            <h3 className="text-gray-800 font-semibold mb-1">
              Login to your account
            </h3>
            <p className="text-gray-500 text-sm">
              Thank you for get back to Grovia, lets access our the best
              recommendation contact for you.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Email or Phone Number"
              />
              {errors.username && (
                <span className="text-red-500 text-xs">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 pr-10"
                  placeholder="Password"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2 accent-red-600"
                  {...register("rememberMe")}
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-red-500 text-sm font-semibold hover:underline"
              >
                Reset Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-3 mt-2 transition"
            >
              SIGN IN
            </button>
          </form>
          <div className="mt-6 text-center text-gray-700 text-sm">
            Don&apos;t have an account yet?{" "}
            <span className="text-red-600 underline cursor-pointer font-semibold">
              Join Grovia Now!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
