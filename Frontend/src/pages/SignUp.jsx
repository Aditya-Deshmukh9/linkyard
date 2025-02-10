import React, { useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password } = formData;
    const newErrors = { fullName: "", email: "", password: "" };

    if (!fullName.trim()) newErrors.fullName = "FullName is required.";
    if (!email.trim() || !validateEmail(email))
      newErrors.email = "Enter a valid email.";
    if (!password.trim() || password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");
    if (!hasError) {
      await axios
        .post(
          `${import.meta.env.VITE_BASEURL}/api/auth/register`,
          {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "Application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          toast.success("Sign Successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setFormData({ name: "", email: "", password: "" });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <section className="w-96 bg-white/50 backdrop-blur-md p-7 rounded-sm">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Sign Up
          </h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input  w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-8">
            <label className="block mb-1 font-medium text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
