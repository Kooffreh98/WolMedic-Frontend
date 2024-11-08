import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="absolute top-4 right-6 flex items-center gap-4">
        <Image
          src="/Images/photo.webp"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-gray-700 font-semibold">Ella Baris</p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
