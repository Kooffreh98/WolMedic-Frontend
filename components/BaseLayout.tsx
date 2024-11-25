"use client";

import { useState, useEffect, ReactNode } from "react"; // Import necessary hooks and types
import Sidebar from "./Sidebar";
import NavBarSm from "./NavbarSm"; // Assuming you have this component

interface BaseLayoutProps {
  children: ReactNode; // Explicitly type children as ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isMediumUp, setIsMediumUp] = useState<boolean>(false);

  useEffect(() => {
    // Function to check the window width
    const handleResize = () => {
      setIsMediumUp(window.innerWidth >= 768); // 768px is considered the medium breakpoint
    };

    // Set initial value on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this only runs once when component mounts

  return (
    <div className="min-h-screen flex flex-col">
      {isMediumUp ? (
        <div className="flex flex-grow">
          {/* Desktop layout: Sidebar + Main Content */}
          <Sidebar />
          <main className="flex-grow relative p-4">
            <div className="overflow-auto h-full">{children}</div>
          </main>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Mobile layout: NavBarSm + Main Content */}
          <NavBarSm />
          <div className="p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

export default BaseLayout;
