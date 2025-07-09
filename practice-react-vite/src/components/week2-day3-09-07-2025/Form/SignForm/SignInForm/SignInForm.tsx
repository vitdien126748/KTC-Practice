import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router";

type SignInFormInput = {
  password: string;
};

const schema = yup
  .object({
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  })
  .required();

const SignInForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const name = location.state?.name || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<SignInFormInput> = () => {
    alert("Sign In Successful");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 py-6 px-2">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        }}
        className="w-full h-170 max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-xl relative flex flex-col "
      >
        {/* Form card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 px-6 py-8 backdrop-blur-3xl rounded-3xl mt-40 z-10"
        >
          <h2 className="text-white text-2xl font-bold mb-2">Log in</h2>
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://m.yodycdn.com/blog/meme-anh-da-den-yody-vn-3.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <div>
              <p className="text-white font-semibold leading-tight">
                {name || "User"}
              </p>
              <p className="text-gray-300 text-xs">{email}</p>
            </div>
          </div>
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
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-3 mt-2 transition"
          >
            Continue
          </button>
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

export default SignInForm;
