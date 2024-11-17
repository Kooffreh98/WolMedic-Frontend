import Sidebar from "components/Sidebar";
import { ReactNode } from "react";
//import { useRouter } from "next/router"; // For dynamic routing if using Next.js

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col md:flex-row h-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content (children will be the content of your pages) */}
      <div className="flex flex-col w-full">{children}</div> {/* Ensure space for the sidebar */}
    </div>
  );
};

export default Layout;


{/*import React from "react";
import { SidebarProvider } from "@/context/SideBarContext";
import LoaderLayout from "@/components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <LoaderLayout>{children}</LoaderLayout>
    </SidebarProvider>
  );
}
*/}

