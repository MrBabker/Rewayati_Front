"use client";

import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // هنا بعدين تربطها بالباك إند أو PlayFab
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#414141]">
      <div className="bg-white shadow-lg p-8 w-[90%] max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#333] mb-6">Create Account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-[#555] mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-[#555] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-[#555] mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 text-white font-semibold py-2 rounded-lg hover:bg-amber-500 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
