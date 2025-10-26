"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HOST, Story, users } from "@/utils";

export const HomePage = () => {
  const [stories, setStories] = useState<Story[]>([]);

  const GetAllStories = async () => {
    try {
      const res = await fetch(`${HOST}/stories/getall`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setStories(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const fetchStories = async () => {
      await GetAllStories();
    };
    fetchStories();
  }, []);

  return (
    <div className=" w-full bg-amber-100 overflow-hidden">
      <div className="bg-[#3330] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {" "}
        {stories.map((stories, index) => (
          <div
            key={index}
            className="h-[150px]  p-2  mt-5 bg-[#ededed] border-2 border-[#333] shadow-xl"
          >
            <div className=" h-full overflow-hidden bg-[#fff] ">
              <div className=" text-[#333] text-xl font-bold">
                {stories.creator}
              </div>
              <div className=" flex flex-row">
                <div className=" text-[#333] font-bold">{stories.title}</div>
                <div className=" ml-3 p-1" style={{ fontSize: 12 }}>
                  {new Date(stories.createdAt).toDateString()+'   '+stories.id}
                </div>
                <Link href={`/${stories.id}`}>see</Link>
              </div>

              <div className=" flex flex-wrap">{stories.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
