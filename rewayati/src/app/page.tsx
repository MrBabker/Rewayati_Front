import { HomePage } from "@/components/home/HomePage";
import NaveBar from "@/components/home/NaveBar";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <NaveBar/>
    <h1 className=" p-5 text-2xl font-bold text-[#bd4200]  " >All Rewayat</h1>
    <HomePage/>
   </div>
  );
}
