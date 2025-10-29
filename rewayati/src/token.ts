"use client";
import Cookies from "js-cookie";

export const getToken = async (): Promise<string | undefined> => {
  
    // في client-side
    return Cookies.get("jwt");
  
};
