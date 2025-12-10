"use client";
import Link from "next/link";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Logs, useAppContext } from "../Context";
import { HOST, User } from "@/utils";
import { useRouter } from "next/navigation";

const NaveBar = ({ username, logged }: User) => {
  const { login }: Logs = useAppContext();
  const router = useRouter();

  const Logout = async () => {
    try {
      const res = await fetch(`${HOST}/users/out`, {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
        router.push("/logedout");
      }
    } catch (error) {}
  };

  const GoLogin = () => {
    router.push("/login");
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
            <div>
              <button onClick={GoLogin} className="cursor-pointer uppercase font-bold bg-white px-2 py-1 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                Login
              </button>
            </div>
          )}
          {logged && (
            <div className=" flex flex-row">
              <div className=" text-white font-bold mr-3">
                Welcome {" " + username}{" "}
              </div>
              <button
                onClick={Logout}
                className="group flex items-center justify-start w-8 h-8 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
              >
                <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                  <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Logout
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
