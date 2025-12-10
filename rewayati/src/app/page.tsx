import { HomePage } from "@/components/home/HomePage";
import NaveBar from "@/components/home/NaveBar";
import Profile from "@/components/ProfImage/Profile";
import ProfImg from "@/components/ProfImage/ProfImg";
import Try from "@/components/Try";
import { getToken } from "@/tokenServer";
import Image from "next/image";

export default async function Home() {
  const user = getToken();

  return (
    <div>
      <div className=" w-screen flex flex-row justify-between">
        <h1 className=" p-5 text-2xl font-bold text-[#bd4200] pt-22 ">
          All Rewayat s
        </h1>
        <Profile
          id={(await user).id}
          username={(await user).username}
          email={(await user).email}
          logged={(await user).logged}
          image={(await user).image}
        />
      </div>

      <HomePage
        id={(await user).id}
        username={(await user).username}
        email={(await user).email}
        logged={(await user).logged}
        image={(await user).image}
      />
      <NaveBar
        id={(await user).id}
        username={(await user).username}
        email={(await user).email}
        logged={(await user).logged}
        image={(await user).image}
      />
      <Try />
      <ProfImg
        id={(await user).id}
        username={(await user).username}
        email={(await user).email}
        logged={(await user).logged}
        image={(await user).image}
      />
    </div>
  );
}
