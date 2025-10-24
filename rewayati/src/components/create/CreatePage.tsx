"use client";
import Link from "next/link";
import React, { useState } from "react";
import NaveBar from "../home/NaveBar";

interface Story {
  id: number;
  bigtitle: string;
  subtitle: string;
  subject: string;
}

const CreatePage = () => {
  const [story, setStory] = useState<Story[]>([]);

  const [bigtitle, setBigtitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [subject, setSubject] = useState<string>();

  const AddStory = (e: React.FormEvent) => {
    e.preventDefault();
    const theStory: Story = {
      id: story.length + 1,
      bigtitle: bigtitle ?? "",
      subject: subject ?? "",
      subtitle: subtitle ?? "",
    };

    setStory((prev) => [...prev, theStory]);
  };
   const AddStoryTitle = (e: React.FormEvent) => {
    e.preventDefault();
    const theStory: Story = {
      id: story.length + 1,
      bigtitle: bigtitle ?? "",
      subject: subject ?? "",
      subtitle: subtitle ?? "",
    };

    setStory((prev) => [...prev, theStory]);
  };
  return (
    <div>
      <NaveBar />{" "}
      <div className=" bg-[#f8f8f8] mt-12 h-[98%] p-5 overflow-y-auto ">
        <div className="w-full h-full justify-center justify-items-center align-middle">
          <div>
            {story.map((story, index) => {
              return (
                <div className=" " key={index}>
                  <div className="storyWidth">
                    <div className=" bg-[#333] w-full flex-wrap p-5   ">
                      {" "}
                      <div className=" font-bold text-xl text-white">
                        {index + 1 + " " + story.subtitle}
                      </div>
                      <div className=" text-white ">
                        {story.subject.toWellFormed()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" bg-[#f4f4f4] p-5 shadow-2xl w-[90%]">
            <form onSubmit={AddStoryTitle}>
              <div className=" font-bold py-3 text-xl text-[#333]">
                Title
              </div>
              <input
                className=" border-2 border-[#969696] w-full py-1 px-2 rounded-sm"
                onChange={(e) => setSubtitle(e.target.value)}
                type="text"
              />

              <div></div>
              <button className=" mt-7 my-2 bg-[#333] hover:bg-[#626262] transition py-2 px-3 text-white font-semibold">
                Add or update 
              </button>
            </form>
            <form onSubmit={AddStory}>
              <div className=" font-bold py-3 text-xl text-[#333]">
                SubTitle
              </div>
              <input
                className=" border-2 border-[#969696] w-full py-1 px-2 rounded-sm"
                onChange={(e) => setSubtitle(e.target.value)}
                type="text"
              />
              <div className=" font-bold py-3 text-xl text-[#333]">
                SubTitle
              </div>
              <input
                className=" border-2 border-[#969696] w-full py-1 px-2 rounded-sm"
                onChange={(e) => setSubtitle(e.target.value)}
                type="text"
              />
              <div className=" font-semibold py-3 text-[#333]">Subject</div>
              <textarea
                className=" border-2  border-[#969696] w-full h-80 py-1 px-2"
                onChange={(e) => setSubject(e.target.value)}
              />
              <div></div>
              <button className=" mt-7 my-2 bg-[#333] hover:bg-[#626262] transition py-2 px-3 text-white font-semibold">
                Add new subject +
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
