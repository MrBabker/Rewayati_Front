"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Logs, useAppContext } from "../Context";
import { HOST, User } from "@/utils";

const Profile = ({image, logged} :User) => {

    const { setOpenProf }:Logs = useAppContext()

    console.log(`${HOST}/users/${image}`)
  return (
    <div>
      {logged && <div className="relative ml-[20] hover:border-2">
        <img
          className="mt-[60px] p-1  rounded-full"
          src={image===null? "/int.png":`${HOST}/users/${image}`}
          alt={`${HOST}/users/${image}`}
          width={70}
          height={70}
        />
        <button
          onClick={()=>setOpenProf(true)}
          className="absolute top-15 left-0 w-[70px] h-[70px]  opacity-0 cursor-pointer"
        />
      </div>}
    </div>
  );
};

export default Profile;
