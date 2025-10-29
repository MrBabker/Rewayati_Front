"use client";
import { User } from "@/utils";
import React, { createContext, useContext, useState } from "react";

// 1. إنشاء الكونتكست
const AppContext = createContext<Logs|undefined>(undefined);

// 2. إنشاء الـ Provider
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [login, setLogin] = useState(false);
   const [user, setUser] = useState<User>({ id:0,username:'',email:''});

  return (
    <AppContext.Provider value={{ login, setLogin , user , setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export interface Logs {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  user:User,
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used inside AppProvider");
  return context;
};
