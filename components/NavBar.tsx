import React from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import Layout from "app/(root)/layout";

const Navbar = () => {
  return (
    <Layout>
      <header className="fixed top-0 right-0 w-full md:w-auto p-3 md:p-4 h-[4.2rem] z-50">
        <div className="flex justify-end md:justify-between items-center md:w-[20%] p-2 md:p-[0.4rem] rounded-full space-x-2 md:space-x-4">
          <Image
            src="/Images/photo.webp"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="hidden md:block">
            <p className="m-0 text-gray-700 font-semibold">Ella Baris</p>
            <p className="m-0 text-sm text-gray-500">Admin</p>
          </div>
          <MdArrowDropDown />
        </div>
      </header>
    </Layout>
  );
};

export default Navbar;
