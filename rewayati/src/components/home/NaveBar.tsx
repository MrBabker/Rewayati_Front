"use client";
import Link from "next/link";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const NaveBar = () => {
  return (
    <div className=" fixed top-0 z-9999 shadow-xl">
      <div className=" w-screen bg-[#333] p-5 py-2 flex flex-row justify-between">
        <div className="flex items-center ">
          <div className=" px-4 py-2 text-white ">
            <Link href={`/`}>Home</Link>
          </div>

          <Menu>
            <MenuButton className="   w-fit text-white px-4 py-2  border-white/0 hover:text-[#6acdff] transition">
              Services
            </MenuButton>

            {/* القائمة */}
            <MenuItems className="absolute  mt-25 w-56 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition">
              <div className="p-1">
                <MenuItem>
                  <Link
                    href={`/create`}
                    className="group flex w-full items-center font-semibold  px-2 py-2 text-sm text-gray-900 hover:bg-[#333] hover:text-white transition "
                  >
                    Create your fairytale
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href={``}
                    className="group flex w-full items-center font-semibold  px-2 py-2 text-sm text-gray-900 hover:bg-[#333] hover:text-white transition "
                  >
                    Contact us
                  </Link>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>

        <div className=" flex items-center gap-3">
          <div className=" px-3 py-1 text-white   bg-gray-600 hover:bg-gray-700 transition ">
            <Link href={`/login`}>Login</Link>
          </div>
           <div className=" px-3 py-1 text-white   bg-gray-600 hover:bg-gray-700 transition ">
            <Link href={``}>Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
