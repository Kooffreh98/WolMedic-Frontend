import { Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";

// Load Open Sans font
const open_sans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "MedEquip Pro (V1.0)",
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
      <Link rel="icon" type="image/svg+xml" href="/public/Logo.png" />
      <body className={`${open_sans.className}`}>{children}</body>
    </html>
  );
}
