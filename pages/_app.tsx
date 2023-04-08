import "@/styles/null.scss";
import "@/styles/global.scss";
import "@/styles/HomePage.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
