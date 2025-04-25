import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";

export default function App({ Component, pageProps }: AppProps) {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider className="dark">
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}