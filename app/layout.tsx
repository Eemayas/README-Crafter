/** @format */

// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomSpinner } from "@/components/Modals/Modals";
import ReduxProvider from "@/lib/context/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <CustomSpinner />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
