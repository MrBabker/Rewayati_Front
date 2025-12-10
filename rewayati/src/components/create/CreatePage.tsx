"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import NaveBar from "../home/NaveBar";
import { useRouter } from "next/navigation";
import { HOST, User } from "@/utils";
import { useSelector, useDispatch } from 'react-redux'
import { setBigtitle, setDes , setSubject ,setSubtitle ,setTitlesNum } from '@/featuers/createStory/createStorySlice'
import { RootState } from "@/app/store";

interface Story {
  id: number;
  bigtitle: string;
  subtitle: string;
  subject: string;
}
interface Subjects {
  subject: string;
}

interface SubTitles {
  subtitle: string;
}
const CreatePage = ({ username, logged }: User) => {
  const router = useRouter();
   const storyS = useSelector((state: RootState) => state.storyReducer)
  const dispatch = useDispatch()

  const [story, setStory] = useState<Story[]>([]);
  const [subjects, setSubjects] = useState<Subjects[]>([]);
  const [subTitles, setSubTitles] = useState<SubTitles[]>([]);

 
  const AddStory = (e: React.FormEvent) => {
    e.preventDefault();
    const theStory: Story = {
      id: story.length + 1,
      bigtitle: storyS.bigtitle ?? "",
      subject: storyS.subject ?? "",
      subtitle: storyS.subtitle ?? "",
    };
    const theSubject: Subjects = {
      subject: storyS.subject ?? "",
    };
    const theSubTitle: SubTitles = {
      subtitle: storyS.subtitle ?? "",
    };
    setStory((prev) => [...prev, theStory]);
    setSubjects((prev) => [...prev, theSubject]);
    setSubTitles((prev) => [...prev, theSubTitle]);

    setTitlesNum((parseInt(storyS.titlesnum) + 1).toString());
  };

  const GoToLogin = () => {
    router.push("/login");
  };

  const RemoveStory = (index: number, e: React.FormEvent) => {
    e.preventDefault();

    const st = [...story];
    st.splice(index, 1);

    setStory(st);
    setTitlesNum((parseInt(storyS.titlesnum) - 1).toString());
  };

  const AddStoryTitle = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const CreateTheStory = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(username)
    try {
      const res = await fetch(`${HOST}/stories/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          creator: username,
          title: storyS.bigtitle,
          description: storyS.des,
          subtitles: subTitles,
          subjects: subjects,
        }),
      });

      if (res.ok) {
        router.push(`/created`);
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className=" bg-[#f8f8f8] mt-12 h-[98%] p-5 overflow-y-auto ">
        <div className="w-full h-full justify-center justify-items-center align-middle">
          <div className=" text-2xl font-bold text-justify justify-center mb-3">
            {storyS.bigtitle}
          </div>
          <div className="  text-justify justify-center mb-5">{storyS.des}</div>
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
                      <div className=" w-full flex flex-row justify-items-end justify-end">
                        <button
                          onClick={(e) => RemoveStory(index, e)}
                          style={{ fontSize: 9 }}
                          className=" mt-7 my-2 bg-[#c80000]  hover:bg-[#626262] transition py-1 px-2  text-white font-semibold"
                        >
                          DELETE X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" bg-[#f4f4f4] p-5 shadow-2xl w-[90%]">
            <form onSubmit={AddStoryTitle}>
              <div className=" font-bold py-3 text-xl text-[#333]">Title</div>
              <input
                className=" border-2 border-[#969696] w-full py-1 px-2 rounded-sm"
                onChange={(e) =>dispatch( setBigtitle(e.target.value))}
                type="text"
              />
              <div className=" font-bold py-3  text-[#333]">Description</div>
              <textarea
                className=" border-2 border-[#969696] w-full py-1 px-2 rounded-sm mb-7"
                onChange={(e) => dispatch(setDes(e.target.value))}
              />
            </form>
            <form onSubmit={AddStory}>
              <div className=" font-bold py-3 text-xl text-[#333]">
                SubTitle {" " + `[ ${storyS.titlesnum} ]`}
              </div>
              <input
                className=" border-2 border-[#969696] w-full py-1 px-2 rounded-sm"
                onChange={(e) => dispatch(setSubtitle(e.target.value))}
                type="text"
              />

              <div className=" font-semibold py-3 text-[#333]">Subject</div>
              <textarea
                className=" border-2  border-[#969696] w-full h-80 py-1 px-2"
                onChange={(e) => dispatch(setSubject(e.target.value))}
              />
              <div></div>
              {logged ? (
                <>
                  <div className=" w-full flex flex-row  justify-between justify-items-end">
                    <button className=" mt-7 my-2 bg-[#333] hover:bg-[#626262] transition py-2 px-3 text-white font-semibold">
                      Add new subject +
                    </button>
                  </div>
                  <button
                    onClick={CreateTheStory}
                    className=" mt-7 my-2 bg-[#e97400] hover:bg-[#626262] transition py-2 px-3 text-white font-semibold"
                  >
                    Create the Story
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button onClick={GoToLogin} className=" mt-7 my-2 bg-[#333] hover:bg-[#626262] transition py-2 px-3 text-white font-semibold">
                    login to create your story
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
