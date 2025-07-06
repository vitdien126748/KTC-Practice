import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";
import InputField from "./InputField";
import DisplayError from "./DisplayError";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";

const genderOptions = ["Male", "Female", "Other"];
const countryOptions = ["USA", "Vietnam", "UK"];
const hobbiesOptions = ["Reading", "Sports", "Travel"];

const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
    country: "",
    hobbies: [] as string[],
    picture: undefined as File | undefined,
    bio: ""
};

type State = typeof initialState;
type Errors = { [K in keyof State]?: string };

const RegistrationForm = () => {
    const [values, setValues] = useState<State>(initialState);
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<{ [K in keyof State]?: boolean }>({});

    const validate = (field: keyof State, value: State[keyof State] = values[field]): string => {
        switch (field) {
            case "fullName":
                if (!value) return "This field is required";
                if (typeof value === "string" && value.length < 3) return "At least 3 characters";
                break;
            case "email":
                if (!value) return "This field is required";
                if (typeof value === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
                break;
            case "password":
                if (!value) return "This field is required";
                if (typeof value === "string" && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) return "Min 8 chars, letters & numbers";
                break;
            case "confirmPassword":
                if (!value) return "This field is required";
                if (value !== values.password) return "Passwords do not match";
                break;
            case "phone":
                if (!value) return "This field is required";
                if (typeof value === "string" && !/^\d{10,}$/.test(value)) return "Digits only, min 10 digits";
                break;
            case "gender":
                if (!value) return "Please select gender";
                break;
            case "dob":
                {
                    if (!value) return "This field is required";
                    if (typeof value === "string") {
                        const age = new Date().getFullYear() - new Date(value).getFullYear();
                        if (age < 18) return "You must be at least 18";
                    }
                    break;
                }
            case "country":
                if (!value) return "Please select a country";
                break;
            case "hobbies":
                if (!value || (Array.isArray(value) && value.length === 0)) return "Select at least one hobby";
                break;
            case "picture":
                if (value && value instanceof File) {
                    const ext = value.name.split(".").pop()?.toLowerCase();
                    if (!["jpg", "jpeg", "png"].includes(ext || "")) return "Only .jpg/.jpeg/.png";
                }
                break;
            case "bio":
                if (typeof value === "string" && value.length > 300) return "Max 300 characters";
                break;
            default:
                break;
        }
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setValues((prev) => {
                const hobbies = prev.hobbies.slice();
                if (checked) {
                    hobbies.push(value);
                } else {
                    const idx = hobbies.indexOf(value);
                    if (idx > -1) hobbies.splice(idx, 1);
                }
                return { ...prev, hobbies };
            });
        } else if (type === "radio") {
            setValues((prev) => ({ ...prev, [name]: value }));
        } else {
            setValues((prev) => ({ ...prev, [name]: value }));
        }
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setValues((prev) => ({ ...prev, picture: file }));
        setTouched((prev) => ({ ...prev, picture: true }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, [name]: validate(name as keyof State) }));
    };

    const validateAll = (): boolean => {
        const newErrors: Errors = {};
        (Object.keys(values) as (keyof State)[]).forEach((key) => {
            const err = validate(key, values[key]);
            if (err) newErrors[key] = err;
        });
        setErrors(newErrors);
        setTouched((prev) => {
            const allTouched = { ...prev };
            (Object.keys(values) as (keyof State)[]).forEach((key) => {
                allTouched[key] = true;
            });
            return allTouched;
        });
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateAll()) {
            alert("Registration successful!");
            setValues(initialState);
            setTouched({});
            setErrors({});
        }
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit} noValidate>
            <h2 className={styles.title}>User Registration</h2>
            <InputField
                label="Full Name:"
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fullName ? errors.fullName : ""}
                required
            />
            <DisplayError message={touched.fullName ? errors.fullName : ""} />

            <InputField
                label="Email:"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email ? errors.email : ""}
                required
            />
            <DisplayError message={touched.email ? errors.email : ""} />

            <InputField
                label="Password:"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password ? errors.password : ""}
                required
            />
            <DisplayError message={touched.password ? errors.password : ""} />

            <InputField
                label="Confirm Password:"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.confirmPassword ? errors.confirmPassword : ""}
                required
            />
            <DisplayError message={touched.confirmPassword ? errors.confirmPassword : ""} />

            <InputField
                label="Phone Number:"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone ? errors.phone : ""}
                required
            />
            <DisplayError message={touched.phone ? errors.phone : ""} />

            <label className={styles.label}>Gender:</label>
            <RadioGroup
                options={genderOptions}
                selected={values.gender}
                onChange={(val) => {
                    setValues((prev) => ({ ...prev, gender: val }));
                    setTouched((prev) => ({ ...prev, gender: true }));
                }}
                name="gender"
                required
            />
            <DisplayError message={touched.gender ? errors.gender : ""} />

            <label className={styles.label} htmlFor="dob">Date of Birth:</label>
            <input
                className={errors.dob && touched.dob ? `${styles.input} ${styles.inputError}` : styles.input}
                type="date"
                id="dob"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                required
            />
            <DisplayError message={touched.dob ? errors.dob : ""} />

            <label className={styles.label} htmlFor="country">Country:</label>
            <select
                className={errors.country && touched.country ? `${styles.select} ${styles.selectError}` : styles.select}
                id="country"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                required
            >
                <option value="">Select a country</option>
                {countryOptions.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            <DisplayError message={touched.country ? errors.country : ""} />

            <label className={styles.label}>Hobbies:</label>
            <CheckboxGroup
                options={hobbiesOptions}
                selected={values.hobbies}
                onChange={(hobbies) => {
                    setValues((prev) => ({ ...prev, hobbies }));
                    setTouched((prev) => ({ ...prev, hobbies: true }));
                }}
                name="hobbies"
                required
            />
            <DisplayError message={touched.hobbies ? errors.hobbies : ""} />

            <label className={styles.label} htmlFor="picture">Profile Picture:</label>
            <input
                className={errors.picture && touched.picture ? `${styles.input} ${styles.inputError}` : styles.input}
                type="file"
                id="picture"
                name="picture"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
            />
            <DisplayError message={touched.picture ? errors.picture : ""} />

            <label className={styles.label} htmlFor="bio">Bio / About You:</label>
            <textarea
                className={errors.bio && touched.bio ? `${styles.textarea} ${styles.textareaError}` : styles.textarea}
                id="bio"
                name="bio"
                value={values.bio}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={300}
            />
            <DisplayError message={touched.bio ? errors.bio : ""} />

            <button className={styles.button} type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
