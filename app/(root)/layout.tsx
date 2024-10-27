import React from "react";
import { SidebarProvider } from "@/context/SideBarContext";
import LoaderLayout from "@/components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <LoaderLayout>{children}</LoaderLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
