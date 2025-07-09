import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

type SignUpFormInput = {
  email: string;
  name: string;
  password: string;
  agree: boolean;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    name: yup.string().min(2).max(100).required("Name is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    agree: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  })
  .required();

const SignUpForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const email = location.state?.email || "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<SignUpFormInput> = () => {
    navigate("/signin", {
      state: { email: email, name: name },
    });
  };

  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 py-6 px-2">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        }}
        className="w-full h-170 max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-xl bg-black relative flex flex-col justify-end"
      >
        {/* Form card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-6 py-8 rounded-t-3xl -mt-10 z-10 backdrop-blur-3xl"
        >
          <h2 className="text-white text-2xl font-bold mb-2">Sign up</h2>
          <p className="text-gray-200 text-sm mb-1">
            Looks like you don't have an account.
          </p>
          <p className="text-gray-200 text-sm mb-4">
            Let's create a new account for{" "}
            <span className="font-semibold">{email}</span>
          </p>
          {/* Email */}
          <div>
            <label className="sr-only">Email</label>
            <input
              {...register("email")}
              placeholder="Email"
              value={email}
              className={`w-full rounded-lg px-4 py-3 bg-gray-900 text-white placeholder-gray-400 border-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
                errors.email ? "border-red-500" : "border-transparent"
              }`}
            />
            {errors.email && (
              <span className="text-red-400 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* Name */}
          <div>
            <label className="sr-only">Name</label>
            <input
              {...register("name")}
              placeholder="Name"
              onChange={handleOnChangeName}
              className={`w-full rounded-lg px-4 py-3 bg-gray-900 text-white placeholder-gray-400 border-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
                errors.name ? "border-red-500" : "border-transparent"
              }`}
            />
            {errors.name && (
              <span className="text-red-400 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Password */}
          <div>
            <label className="sr-only">Password</label>
            <input
              {...register("password")}
              placeholder="Password"
              type="password"
              className={`w-full rounded-lg px-4 py-3 bg-gray-900 text-white placeholder-gray-400 border-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
                errors.password ? "border-red-500" : "border-transparent"
              }`}
            />
            {errors.password && (
              <span className="text-red-400 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-2 mb-1">
            By selecting Agree and continue below,
            {/* agree to terms */}
            <br />
            <input type="checkbox" {...register("agree")} /> I agree to{" "}
            <span className="text-green-400 underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-green-400 underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
          {errors.agree && (
            <span className="text-red-400 text-xs">{errors.agree.message}</span>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-3 mt-2 transition"
          >
            Agree and continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
