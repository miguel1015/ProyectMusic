import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import "../styles/styles.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Navbar from "@/components/Navbar/Navbar";
import Footers from "@/components/Foouters/Index";
import ValidationToken from "./General/ValidationToken";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [accessValidate, setAccessValidate] = useState<boolean>();
  const { pathname } = useRouter();

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/Login/Index" ||
      pathname === "/Register/Index"
    ) {
      setAccessValidate(false);
    } else {
      setAccessValidate(true);
    }
  }, [pathname]);

  return (
    <>
      <Provider store={store}>
        <ValidationToken>
          <ToastContainer />
          {accessValidate && <Navbar />}
          <Component {...pageProps} />
          <Footers />
        </ValidationToken>
      </Provider>
    </>
  );
}
