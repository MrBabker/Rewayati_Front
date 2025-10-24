"use client";
import Link from "next/link";
import React, { useState } from "react";
import { users } from "@/utils";

export const HomePage = () => {
  return (
    <div className=" w-full bg-amber-100 overflow-hidden">
      <div className="bg-[#3330] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {" "}
        {users.map((user, index) => (
          <div
            key={index}
            className="h-[150px]  p-2  mt-5 bg-[#ededed] border-2 border-[#333] shadow-xl"
          >
            <div className=" h-full overflow-hidden bg-[#fff] ">
              <div className=" text-[#333] text-xl font-bold">
                {user.username}
              </div>
              <div className=" flex flex-row">
                <div className=" text-[#333] font-bold">{user.rewayaTite}</div>
                <div className=" ml-3 p-1" style={{ fontSize: 12 }}>
                  {user.date.toDateString()}
                </div>
                <Link href={`/${user.id}`}>see</Link>
              </div>

              <div className=" flex flex-wrap">{user.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
