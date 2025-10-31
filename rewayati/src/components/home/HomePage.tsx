"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HOST, Story, User } from "@/utils";
import { Logs, useAppContext } from "../Context";
import { getToken } from "@/tokenServer";
import socket from "@/lib/socket";
import delStyle from '@/app/delButton.module.css'

export const HomePage = ({ username, logged }: User) => {
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
    // الاستماع لتحديثات المستخدمين
    socket.on("storydeleted", (data) => {
      console.log("story deleted:", data);
      GetAllStories();
    });

    return () => {
      socket.off("storydeleted");
    };
  }, []);

  useEffect(() => {
    const fetchStories = async () => {
      await GetAllStories();
    };
    fetchStories();
  }, []);

  const RemoveSTory = async (id: number) => {
    try {
      const res = await fetch(`${HOST}/stories/del/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log("Deleted");
      }
    } catch (error) {}
  };

  return (
    <div className=" w-full bg-amber-100 overflow-hidden">
      <div className="bg-[#3330] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {" "}
        {stories.map((story, index) => (
          <div
            key={index}
            className="h-[150px]  p-2  mt-5 bg-[#ededed] border-2 border-[#333] shadow-xl"
          >
            {" "}
            <div className=" h-full overflow-hidden bg-[#fff] ">
              <div className=" flex flex-row justify-between">
                <div className=" text-[#333] text-xl font-bold">
                  {story.creator}
                </div>
                <div>
                  {logged && username === story.creator && (
                    <button 
                    onClick={()=>RemoveSTory(story.id)}
                    className={delStyle.button}>
                      <svg viewBox="0 0 448 512" className={delStyle.svgIcon}>
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className=" flex flex-row">
                <div className=" text-[#333] font-bold">{story.title}</div>
                <div className=" ml-3 p-1" style={{ fontSize: 12 }}>
                  {new Date(story.createdAt).toDateString() + "   " + story.id}
                </div>
                <Link href={`/${story.id}`}>see</Link>
              </div>

              <div className=" flex flex-wrap">{story.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
