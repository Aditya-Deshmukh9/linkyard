import axios from "axios";
import React, { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { BGChange } from "../hooks/ContextApi";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function SignIn() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    email: "",
    password: "",
  });
  const { isLogin, setIsLogin } = useContext(BGChange);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const newErrors = { email: "", password: "" };

    if (!email.trim() || !validateEmail(email))
      newErrors.email = "Enter a valid email.";
    if (!password.trim() || password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    setError(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");
    if (!hasError) {
      try {
        await axios
          .post(`${import.meta.env.VITE_BASEURL}/api/auth/login`, {
            email: email,
            password: password,
          })
          .then(function (response) {
            console.log(response);
            setIsLogin(true);
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
            setFormData({ email: "", password: "" });
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="h-screen w-full flex items-center justify-center ">
      <section className="w-96 bg-white/50 backdrop-blur-md p-7 rounded-sm">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Sign In
          </h2>

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

export default SignIn;
