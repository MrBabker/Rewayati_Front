"use client";
import Link from "next/link";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Logs, useAppContext } from "../Context";
import { HOST, User } from "@/utils";
import { useRouter } from "next/navigation";

const NaveBar = ({ username , logged }: User) => {
  const { login }: Logs = useAppContext();
  const router = useRouter();

  const Logout = async () => {
    try {
      const res = await fetch(`${HOST}/users/out`, {
        method:'POST',
        credentials:'include'
      });
      if (res.ok) {
        router.push("/logedout");
      }
    } catch (error) {}
  };

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
          {!logged && (
            <div >
              <Link className=" px-3 py-1 text-white   bg-gray-600 hover:bg-gray-700 transition " href={`/login`}>Login</Link>
            </div>
          )}
          {logged && (
            <div className=" flex flex-row">
              <div className=" text-white font-bold mr-3">
                Welcome {" " + username}{" "}
              </div>
              <button
                onClick={Logout}
                className=" cursor-pointer px-3 py-1 text-white   bg-gray-600 hover:bg-gray-700 transition "
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
