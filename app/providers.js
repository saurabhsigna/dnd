"use client";

import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";
export function Providers({ children }) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
}
