"use client";

import { HOST, User } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Logs, useAppContext } from "../Context";



const Login = () => {
  const { setLogin , setUser ,user }:Logs = useAppContext() 
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });

    try {
      const res = await fetch(`${HOST}/users/log`,{
        method:'POST',
        headers:{"Content-Type": "application/json",},
        credentials:'include',
        body:JSON.stringify({
          email:email,
          password:password
        })
      })

      if(res.ok){

        const data = await res.json()
         setLogin(true);
         setUser(data.payload);
         console.log(user.username)
         router.push(`/`);
      }
    } catch (error) {
      
    }

   
    // هنا بعدين تقدر تربطها بالباك إند أو PlayFab
  };

  return (
    <div>
      <div className="flex justify-between items-center h-screen bg-[#535353]">
        <div className=" w-120 bg-[#333] h-full"></div>
        <div className="bg-white shadow-lg border-2 border-white p-8 w-[90%] max-w-md mr-70">
          <h1 className="text-2xl font-bold text-center text-[#333] mb-6">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-[#555] mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-[#555] mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 text-white font-semibold py-2 rounded-lg hover:bg-amber-500 transition-colors"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-4">
            Don’t have an account?{" "}
            <Link href={`/signup`} className="text-amber-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
