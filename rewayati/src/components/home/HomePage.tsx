"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HOST, Story, User } from "@/utils";
import { Logs, useAppContext } from "../Context";
import { getToken } from "@/tokenServer";
import socket from "@/lib/socket";
import delStyle from "@/app/delButton.module.css";
import loopcube from "@/app/loopCubes.module.css";
import seeStory from "@/app/seeStory.module.css";

export const HomePage = ({id, username, logged }: User) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [fetching, setFetching] = useState(false);
  const GetAllStories = async (isfetch: boolean) => {
    setFetching(isfetch);
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
        setFetching(false);
      }
    } catch (error) {
      setFetching(false);
    }
  };

  useEffect(() => {
    // الاستماع لتحديثات المستخدمين
    socket.on("storydeleted", (data) => {
      console.log("story deleted:", data);
      GetAllStories(false);
    });

    return () => {
      socket.off("storydeleted");
    };
  }, []);

  useEffect(() => {
    const fetchStories = async () => {
      await GetAllStories(true);
    };
    fetchStories();
  }, []);

  const RemoveSTory = async (id: number) => {
    setFetching(true);
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
        setFetching(false);
      }
    } catch (error) {
      setFetching(false);
    }
  };

  return (
    <div className=" w-full bg-amber-100 overflow-hidden">
      <div className="bg-[#3330] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {" "}
        {stories.map((story, index) => (
          <div
            key={index}
            className={logged && username === story.creator?"h-[150px]  p-2  mt-5 bg-[#ededed] border-4 hover:border-6 transition-all duration-200 border-[#c99700] shadow-xl":'h-[150px]  p-2  mt-5 bg-[#ededed] border-3 hover:border-4 transition-all border-[#333]  shadow-xl'}
          >
            {" "}
            <div className=" h-full overflow-hidden bg-[#fff] ">
              <div className=" flex flex-row justify-between">
                <div className={logged && username === story.creator?" text-[#df9400] text-xl font-bold":" text-[#333] text-xl font-bold"}>
                  {logged && username === story.creator?'Me':story.creator}
                </div>
                <div>
                  {logged && username === story.creator && (
                    <button
                      onClick={() => RemoveSTory(story.id)}
                      className={delStyle.button}
                    >
                      <svg viewBox="0 0 448 512" className={delStyle.svgIcon}>
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className=" flex flex-row justify-between">
                <div className=" flex flex-row">
                 
                  <div className=" text-[#333] font-bold">{story.title}</div>
                  <div className=" ml-3 p-1" style={{ fontSize: 12 }}>
                    {new Date(story.createdAt).toDateString() +
                      "   " +
                      story.id}
                  </div>
                </div>

                <Link
                  className=" mr-2 hover:text-blue-700 transition "
                  href={`/${story.id}`}
                >
                  <button className={seeStory.luxurybutton}>
                    <span className={seeStory.buttontext}>See</span>
                    <span className={seeStory.velvetsheen}></span>
                  </button>
                </Link>
              </div>

              <div className=" flex flex-wrap">{story.description}</div>
            </div>
          </div>
        ))}
      </div>
      {fetching && (
        <div className="bg-black/50 fixed top-0 left-0 h-screen w-screen backdrop-blur-md flex z-10">
          {" "}
          <div className={`${loopcube.cubes}`}>
            <div className={loopcube.loop}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={loopcube.item}>
                  <div className={`${loopcube.face} ${loopcube.front}`}></div>
                  <div className={`${loopcube.face} ${loopcube.back}`}></div>
                  <div className={`${loopcube.face} ${loopcube.left}`}></div>
                  <div className={`${loopcube.face} ${loopcube.right}`}></div>
                  <div className={`${loopcube.face} ${loopcube.top}`}></div>
                  <div className={`${loopcube.face} ${loopcube.bottom}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
