import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      This is created with next.js
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
