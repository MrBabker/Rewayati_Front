import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { User } from "./utils";

export const getToken = async () => {

    const token = (await cookies()).get('jwt')?.value;

    

    const decoded = (token ? jwt.verify(token,process.env.JWT_SECRET??'') : {id:'', username:'' , email:'',logged:false}) as User;

    if(token)decoded.logged=true;

    return decoded

};
