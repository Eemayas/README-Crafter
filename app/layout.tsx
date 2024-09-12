/** @format */

// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomSpinner, UserInputModal } from "@/components/Modals/Modals";
import ReduxProvider from "@/lib/context/ReduxProvider";
import ThemeProviders from "@/lib/context/ThemeProviders";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "README Crafter",
  description:
    "User-friendly editor lets you easily add and customize all the sections you need for your project's README.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <HeroHighlight>
          <ThemeProviders>
            <ReduxProvider>
              <CustomSpinner />
              <UserInputModal />
              <main className={`mx-auto max-w-[100rem]`}> {children}</main>
            </ReduxProvider>
          </ThemeProviders>
        </HeroHighlight>
      </body>
    </html>
  );
}
