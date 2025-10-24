import { HomePage } from "@/components/home/HomePage";
import NaveBar from "@/components/home/NaveBar";
import Image from "next/image";

export default function Home() {
  return (
   <div>
  
    <h1 className=" p-5 text-2xl font-bold text-[#bd4200] pt-22 " >All Rewayat</h1>
    <HomePage/>
      <NaveBar/>
   </div>
  );
}
