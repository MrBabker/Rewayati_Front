import CreatePage from "@/components/create/CreatePage"
import NaveBar from "@/components/home/NaveBar"
import { getToken } from "@/tokenServer";

const page = async () => {

    const user = getToken();
  return (
    <div>
      <NaveBar id={(await user).id} username={(await user).username} email={(await user).email} logged={(await user).logged} image={(await user).image}/>
      <CreatePage id={(await user).id} username={(await user).username} email={(await user).email} logged={(await user).logged} image={(await user).image}/>
    </div>
  )
}

export default page