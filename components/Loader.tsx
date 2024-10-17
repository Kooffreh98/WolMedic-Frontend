"use client";

import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";

// Explicitly define the props type for the component
interface LoaderLayoutProps {
  children: ReactNode; // Use ReactNode instead of ReactElement
}

const LoaderLayout = ({ children }: LoaderLayoutProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer); // Clean up the timeout to avoid memory leaks
  }, []);

  return (
    <>
      {loading ? (
        <div className="loaderContainer flex justify-center items-center h-screen">
          <Image
            src="/iha-logo.svg"
            alt="Loading"
            className="loadingImage"
            width={250}
            height={100}
            priority
          />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderLayout;
