import React from "react";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";

const imageStyle = {
  borderRadius: '999px',
  width: '40px',
  height: '40px'
}
const Navbar = () => {
  return (
    <header className="flex justify-end items-center p-4 bg-white h-[4.2rem] border">
      <div className="w-[20%] flex justify-between p-[0.4rem] items-center h-[3rem] bg-[#D6EAEA] rounded-[80px]">
        <Image
          src="/Images/photo.webp"
          alt="Profile"
          width={40}
          height={40}
          style={imageStyle}
        />
        <div className="">
          <p className="m-0 text-gray-700 font-semibold">Ella Baris</p>
          <p className="m-0 text-sm text-gray-500">Admin</p>
        </div>
        <MdArrowDropDown />
      </div>
    </header>
  );
};

export default Navbar;
