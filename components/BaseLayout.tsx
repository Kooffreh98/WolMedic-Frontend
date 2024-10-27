"use client";

import { useState, useEffect, ReactNode } from "react"; // Import necessary hooks and types
import Header from "./NavBar";
import Sidebar from "./Sidebar";
import NavBarSm from "./NavbarSm"; // Assuming you have this component

interface BaseLayoutProps {
  children: ReactNode; // Explicitly type children as ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isMediumUp, setIsMediumUp] = useState(false);

  useEffect(() => {
    // Function to check the window width
    const handleResize = () => {
      setIsMediumUp(window.innerWidth >= 768); // 768px is considered the medium breakpoint
    };

    // Set initial value
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isMediumUp ? (
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow relative p-4">
            <Header />
            <div className="overflow-auto h-full">{children}</div>
          </main>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Display NavBarSm for mobile view */}
          <NavBarSm />
          <div className="p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

export default BaseLayout;
