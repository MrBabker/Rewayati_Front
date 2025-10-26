import StoryPage from "@/components/storyPage/StoryPage";
import { HOST, Story, users } from "@/utils";
import Link from "next/link";
import { useState } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await  params;

  if (!id) return console.log("not found");

  return (
    <div>
      <StoryPage id={id} />
      {/* <div className=" p-5">
        <div>
          This farytail writen by{" "}
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className=" text-[#333]"
          >
            {user.username}
          </span>
        </div>

        <abbr title={user.username}>
          {" "}
          <div className=" w-full justify-items-center text-3xl font-bold text-[#333]">
            <div>{user.rewayaTite}</div>
          </div>
        </abbr>

        <div style={{ textAlign: "center" }} className=" mt-5 ">
          {user.description}
        </div>

        <div className=" w-full bg-[#333] mt-10 p-10">
          <div className=" text-white">{user.story}</div>
        </div>
        <div className=" mt-5">
          {" "}
          <Link className="px-5 py-2  bg-[#333] text-white font-bold hover:bg-[#cecece] hover:text-[#333]" href="/">
            BACK
          </Link>
        </div>
      </div>*/}
    </div>
  );
}
