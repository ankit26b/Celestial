import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../config/axios'
import { UserContext } from "../context/user.context";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    axios
      .post("/users/register", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);

        navigate("/");
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900" style={{background:"url('../public/celestial.webp')"}}>
      <div className="bg-gray-950 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Register</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-white text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            Register
          </button>
        </form>
        <p className="text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;