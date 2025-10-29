import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-screen  justify-items-center ">
        <div className=" fixed top-0  w-screen h-screen bg-[#e1e1e1] -z-10">

        </div>
      <div className="flex flex-row justify-center justify-items-center align-middle mt-70">
        <div style={{ fontFamily:'monospace'}} className=" text-2xl font-bold text-[#00b421] mb-7 ">
          STORY HAS BEEN CREATED ✅
        </div>
      </div>

      <div style={{ textAlign:'center'}} className=" py-1 px-5  rounded-sm bg-[#007b1f] hover:bg-[#626262] transition  text-white font-semibold">
        <Link href={`/`}>OK</Link>
      </div>
    </div>
  );
};

export default page;
