"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import {
  useRouter,
  useSearchParams,
} from "next/dist/client/components/navigation";
import { signIn, useSession } from "next-auth/react";
import { LuUser } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { useEffect } from "react";

interface ILoginFormInput {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().email().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl =
    searchParams.get("callbackUrl") ||
    "/week3-day3-16-07-2025/practices/task-management/dashboard";

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl);
    }
  }, [status, router, callbackUrl]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    resolver: yupResolver(schema),
    defaultValues: { username: "tungnt@softech.vn", password: "123456789" },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = async (data) => {
    const response = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    if (response?.ok) {
      router.push("/week3-day3-16-07-2025/practices/task-management/dashboard");
    } else {
      alert("Login failed. Please check your credentials.");
    }
    console.log("Login data:", data);
    console.log("Response:", response);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-8">
          <Image
            width={96}
            height={96}
            src="/Images/icons8-task-pastel-color-96.png"
            alt="Logo"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Task Management
          </h2>
          <p className="text-gray-600 text-center">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <LuUser className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                id="username"
                {...register("username")}
                className={`w-full pl-10 pr-3 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.username ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
            </div>
            {errors.username && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.username.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <CiLock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                id="password"
                {...register("password")}
                className={`w-full pl-10 pr-3 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.password ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
