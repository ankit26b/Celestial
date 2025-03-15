import React from "react";
import { useNavigate } from "react-router-dom";

const Launch = () => {
  const navigate = useNavigate();

  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('../public/Launchbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <div className="bg-white/10 text-white z-[-1]">
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-2">
            <img src="../public/logo.png" alt="logo" className="w-28 invert" />
            <h1 className="text-3xl font-mono">Celestial</h1>
          </div>

          <div className="md:flex space-x-6 px-10 flex justify-center items-center">
            <a href="#" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact
            </a>

            <div className="hidden md:flex items-center space-x-4">
              <button
                variant="outline"
                className="px-5 py-2 rounded-3xl bg-black text-white hover:bg-gray-700"
              >
                Login
              </button>
              <button className="px-4 py-2 rounded-3xl bg-white text-black hover:bg-gray-300">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content buttons */}

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-2xl p-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 my-36">
          Explore the Possibilities with Celestial
        </h1>
        <p className="text-lg mb-6 mx-16">
          Manage and collaborate on projects efficiently. Create new projects,
          invite team members, and track progress seamlessly.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/home")}
            className="px-6 py-3 bg-white/10 text-white rounded-md text-lg hover:bg-gray-800 transition"
          >
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-300 text-black rounded-md text-lg hover:bg-gray-400 transition">
            Download
          </button>
        </div>
      </div>
    </main>
  );
};

export default Launch;
