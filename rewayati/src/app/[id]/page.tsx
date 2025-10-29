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
    
    </div>
  );
}
