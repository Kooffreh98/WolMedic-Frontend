import { Open_Sans } from "next/font/google";
import { SidebarProvider } from "@/context/SideBarContext";
import LoaderLayout from "../components/Loader";

import "./globals.css";
import React from "react";

// Load Open Sans font
const open_sans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "IHA Admin Dashboard",
  description:
    "Efficiently manage and monitor all aspects of your platform with the Admin Dashboard. Access key metrics, user data, settings, and tools in one central hub for seamless administration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <SidebarProvider>
          <LoaderLayout>{children}</LoaderLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
