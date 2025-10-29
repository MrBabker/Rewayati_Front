"use client";
import { HOST, Story } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const StoryPage = ({ id }) => {
  const [story, setStory] = useState<Story>();

  const GetStory = async () => {
    try {
      const res = await fetch(`${HOST}/stories/get/${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setStory(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const fetchStory = async () => {
      await GetStory();
    };
    fetchStory();
  }, []);

  return (
    <div>
      <div className=" p-5">
        <div>
          This farytail writen by{" "}
          <span
            style={{ fontSize: 20, fontWeight: "bold" }}
            className=" text-[#333]"
          >
            {story?.creator}
          </span>
        </div>

        <abbr title={story?.title}>
          {" "}
          <div className=" w-full justify-items-center text-3xl font-bold text-[#333]">
            <div>{story?.title}</div>
          </div>
        </abbr>

        <div style={{ textAlign: "center" }} className=" mt-5 ">
          {story?.description}
        </div>

        <div className=" w-full bg-[#333] mt-10 p-10">
          {story?.subjects.map((subject,index) => {
            return (
              <div key={index}>
                <div>
                  <div
                    className={
                      index === 0
                        ? " text-white text-2xl font-bold mb-2"
                        : " text-white text-2xl font-bold mt-5 mb-2"
                    }
                  >
                    {story?.subtitles[index].subtitle}
                  </div>
                  <div className=" text-white">
                    {story?.subjects[index].subject}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" mt-5">
          {" "}
          <Link
            className="px-5 py-2  bg-[#333] text-white font-bold hover:bg-[#cecece] hover:text-[#333]"
            href="/"
          >
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
