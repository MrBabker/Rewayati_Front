"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Logs, useAppContext } from "../Context";
import { HOST, User } from "@/utils";

const ProfImg = ({ id }: User) => {
  const { openProf, setOpenProf }: Logs = useAppContext();
  const [imag, setimge] = useState("");
  const [theFile, setTheFile] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setimge(imageUrl);
      console.log(file.name);
      setTheFile(file);
    }
  };

  const uploadFile = async (file) => {
    if (!theFile) return console.log('BAAAD');

    const formData = new FormData();
    formData.append("meal-img", theFile);

    try {
      const res = await fetch(`${HOST}/users/img${id}`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Uploaded:", data);
        setOpenProf(false);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      {openProf && (
        <div className=" fixed top-0 w-screen h-screen bg-[#333]/90 backdrop-blur-md z-10 justify-center justify-items-center align-middle">
          <h1 className=" fixed top-0 mt-30  w-full text-2xl font-bold text-white justify-center text-center align-middle">
            Profile image :{id}
          </h1>
          <div className=" mt-50 border-2 justify-center justify-items-center p-5 shadow-2xl ">
            <div className="mt-[60px] mb-5 w-[200px] h-[200px] rounded-full overflow-hidden flex items-center justify-center bg-[#222]">
              <Image
                src={imag ? imag : `/int.png`}
                alt="files"
                width={500}
                height={500}
              />
            </div>

            <input
              onChange={handleFileChange}
              type="file"
              className=" w-full bg-[#e6e6e6] border-2  left-0  p-2  opacity-100 cursor-pointer"
            />
            <div className=" flex flex-row justify-between w-full gap-2 mt-3">
              <button
                onClick={uploadFile}
                className="  cursor-pointer flex justify-between bg-[#ffff9a] px-3 py-2  text-[#333] hover:text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-full"
              >
                Save
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5 animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => setOpenProf(false)}
                className="cursor-pointer transition-all bg-[#cd1f1f] ml-3 text-white px-6 py-0 rounded-lg
border-[#511111]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfImg;
