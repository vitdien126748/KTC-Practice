import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Full Name must be at least 3 characters.")
    .required("Full Name is required."),
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email is required.")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email must be a valid email address."
    ),
  password: yup
    .string()
    .min(
      8,
      "Password must be at least 8 characters and contain letters and numbers."
    )
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must be at least 8 characters and contain letters and numbers."
    )
    .required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match.")
    .required("Confirm Password is required."),
  phone: yup
    .string()
    .matches(
      /^0\d{9,}$/,
      "Phone number must be at least 10 digits and start with 0."
    )
    .required("Phone Number is required."),
  gender: yup
    .string()
    .oneOf(["Male", "Female", "Other"], "Please select a gender.")
    .required("Please select a gender."),
  dob: yup
    .date()
    .typeError("Please enter a valid date.")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "You must be at least 18 years old."
    )
    .required("Date of Birth is required."),
  country: yup
    .string()
    .required("Please select a country.")
    .notOneOf([""], "You must select a country."),
  hobbies: yup
    .array()
    .of(yup.string().required())
    .min(1, "You must select at least one hobby")
    .required(),
  profilePic: yup
    .mixed<FileList>()
    .required("Profile picture is required")
    .test("fileType", "...", (value) => {
      return (
        value instanceof FileList &&
        value.length > 0 &&
        ["image/jpeg", "image/jpg", "image/png"].includes(value[0]?.type)
      );
    }),
  bio: yup.string().default("").max(300, "Bio must be at most 300 characters."),
});

interface UserRegistrationFormInputs {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: "Male" | "Female" | "Other";
  dob: Date;
  country: string;
  hobbies: string[];
  profilePic: FileList;
  bio: string;
}

const countries = ["United States", "Canada", "United Kingdom", "Australia"];

const hobbies = [
  { label: "Reading", value: "Reading" },
  { label: "Traveling", value: "Traveling" },
  { label: "Gaming", value: "Gaming" },
];

const UserRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UserRegistrationFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      hobbies: [],
    },
  });

  const bioValue = watch("bio") || "";
  const remainingChars = 300 - bioValue.length;

  const onSubmit = (data: UserRegistrationFormInputs) => {
    alert(`Register success!\n 
        Full Name: ${data.fullName}\n 
        Email: ${data.email}\n 
        Phone: ${data.phone}\n 
        Gender: ${data.gender}\n
        Date of Birth: ${data.dob.toLocaleDateString()}\n
        Country: ${data.country}\n
        Hobbies: ${data.hobbies.join(", ")}\n
        Bio: ${data.bio}\n
    Note: Password and profile picture are not displayed for security reasons.`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold mb-2">User Registration</h2>

        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            {...register("fullName")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            {...register("email")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block font-medium mb-1">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Male"
                {...register("gender")}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Female"
                {...register("gender")}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Other"
                {...register("gender")}
                className="mr-2"
              />
              Other
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-600 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            {...register("dob")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.dob && (
            <p className="text-red-600 text-sm mt-1">{errors.dob.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block font-medium mb-1">Country</label>
          <select
            {...register("country")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-600 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Hobbies */}
        <div>
          <label className="block font-medium mb-1">Hobbies</label>
          <div className="flex gap-4">
            {hobbies.map((hobby) => (
              <label key={hobby.value} className="flex items-center">
                <input
                  type="checkbox"
                  value={hobby.value}
                  {...register("hobbies")}
                  className="mr-2"
                />
                {hobby.label}
              </label>
            ))}
          </div>
          {errors.hobbies && (
            <p className="text-red-600 text-sm mt-1">
              {errors.hobbies.message}
            </p>
          )}
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block font-medium mb-1">Profile Picture</label>
          <input type="file" {...register("profilePic")} className="w-full" />
        </div>

        {/* Bio */}
        <div>
          <label className="block font-medium mb-1">Bio</label>
          <textarea
            {...register("bio")}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={2}
          />
          {bioValue.length > 0 && (
            <div className="text-sm text-gray-500 text-right">
              Remaining: {remainingChars} characters
            </div>
          )}
          {errors.bio && (
            <p className="text-red-600 text-sm mt-1">{errors.bio.message}</p>
          )}
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-black text-white font-semibold rounded py-2 mt-2 hover:bg-gray-800 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
