import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" w-screen  justify-items-center ">
        <div className=" fixed top-0  w-screen h-screen bg-[#e1e1e1] -z-10">

        </div>
      <div className="flex flex-row justify-center justify-items-center align-middle mt-70">
        <div style={{ fontFamily:'monospace'}} className=" text-2xl font-bold text-[#393939] mb-7 ">
          LOGGED OUT , GO TO HOME PAGE ✅
        </div>
      </div>

      <div >
        <Link style={{ textAlign:'center'}} className=" py-1 px-5  rounded-sm bg-[#424242] hover:bg-[#626262] transition  text-white font-semibold" href={`/`}>GO</Link>
      </div>
    </div>
  );
};

export default page;
