import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  password: yup.string().required("Password is required"),
});

type LoginFormInput = {
  username: string;
  password: string;
};
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data);
    alert("Login successful!");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-8 px-2">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 bg-blue-100 flex flex-col justify-center items-center p-8 relative">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-left w-full">
            Set Your Partner
            <br />
            Recruitment on Auto-Pilot
          </h2>
          {/* Main illustration */}
          <div className="relative flex justify-center items-center w-full">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
              alt="main"
              className="w-60 h-60 object-cover rounded-2xl shadow-lg z-10"
            />
            {/* Hexagon overlays */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-pink-200 rounded-2xl flex items-center justify-center -mt-8">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="avatar"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
                <div className="w-20 h-20 bg-blue-200 rounded-2xl flex items-center justify-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/33.jpg"
                    alt="avatar"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-10 z-20">
              <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-10 z-20">
              <div className="w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="avatar"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://seeklogo.com/images/G/grovia-logo-6B1B9C6A6C-seeklogo.com.png"
              alt="Grovia"
              className="w-24 mb-2"
            />
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
              <input
                {...register("password")}
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Password"
              />
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
                  defaultChecked
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
