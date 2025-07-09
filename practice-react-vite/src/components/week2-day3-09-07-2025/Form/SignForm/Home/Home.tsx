import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

type SignFormInput = {
  email: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  })
  .required();

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<SignFormInput> = () => {
    navigate("/signup", { state: { email: email } });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 py-6 px-2">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        }}
        className="w-full h-180 max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-xl relative flex flex-col justify-end"
      >
        {/* Form card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-6 py-8 rounded-t-3xl -mt-10 z-10 backdrop-blur-3xl"
        >
          <h2 className="text-white text-2xl font-bold mb-2">Hi!</h2>
          <input
            {...register("email")}
            placeholder="Email"
            onChange={handleEmailChange}
            className={`w-full rounded-lg px-4 py-3 bg-gray-900 text-white placeholder-gray-400 border-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
              errors.email ? "border-red-500" : "border-transparent"
            }`}
          />
          {errors.email && (
            <span className="text-red-400 text-xs">{errors.email.message}</span>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-3 transition"
          >
            Continue
          </button>
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-400 text-xs">or</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-lg py-3 mb-1"
          >
            <FaFacebook className="w-5 h-5 text-blue-600" />
            Continue with Facebook
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-lg py-3 mb-1"
          >
            <FaGoogle className="w-5 h-5 text-red-600" />
            Continue with Google
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-lg py-3"
          >
            <FaApple className="w-5 h-5 text-black" />
            Continue with Apple
          </button>
          <div className="flex justify-between mt-4 text-xs">
            <span className="text-gray-400">
              Don&apos;t have an account?{" "}
              <span
                className="text-green-400 underline cursor-pointer"
                onClick={() => navigate("/signup", { state: { email } })}
              >
                Sign up
              </span>
            </span>
          </div>
          <div className="mt-2">
            <span
              className="text-green-400 underline text-xs cursor-pointer"
              onClick={() => alert("Forgot password?")}
            >
              Forgot your password?
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
