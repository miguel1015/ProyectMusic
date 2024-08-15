import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import Loading from "../../components/Loading/Loading";

interface MyContextProps {
  accessValidate?: boolean;
}

export const MyContext = createContext<MyContextProps>({});

const ValidationToken: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { push, pathname } = useRouter();

  const [accessValidate, setAccessValidate] = useState<boolean>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessValidate(true);
    } else {
      if (
        pathname === "/" ||
        pathname === "/Login/Index" ||
        pathname === "/Register/Index"
      ) {
        setAccessValidate(true);
      } else {
        setAccessValidate(false);
        push("/");
      }
    }
  }, [pathname, push]);

  return (
    <MyContext.Provider value={{ accessValidate }}>
      {accessValidate ? children : <Loading />}
    </MyContext.Provider>
  );
};

export default ValidationToken;
