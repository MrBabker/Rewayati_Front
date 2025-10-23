"use client";
import Link from "next/link";
import React from "react";
import { Dropdown, Button } from "flowbite-react";

const NaveBar = () => {
  return (
    <div>
      <div className=" w-screen bg-[#333] p-5 flex flex-col ">
        <Dropdown
          className="w-[250px] "
          inline={false}
          label={
            <span className="text-[#fff] hover:text-[#0095ff]">SERVICES</span>
          }
        >
          <div className=" px-5 py-2 shadow-2xl">
          <div className=" my-2 py-1 px-2 font-bold  text-[#333] hover:bg-[#333] hover:text-[#f3f3f3]" >
            <Link  href={'/create'}>Create your farytail</Link>
          </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default NaveBar;
