import { HomePage } from "@/components/home/HomePage";
import NaveBar from "@/components/home/NaveBar";
import Try from "@/components/Try";
import { getToken } from "@/tokenServer";

export default async function Home() {


  const user = getToken();

  return (
   <div>
  
    <h1 className=" p-5 text-2xl font-bold text-[#bd4200] pt-22 " >All Rewayat</h1>
    <HomePage id={(await user).id} username={(await user).username} email={(await user).email} logged={(await user).logged}/>
      <NaveBar id={(await user).id} username={(await user).username} email={(await user).email} logged={(await user).logged}/>
      <Try/>
   </div>
  );
}
