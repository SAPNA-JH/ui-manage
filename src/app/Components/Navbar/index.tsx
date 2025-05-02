"use client";

import { navbarMenus } from "@/app/utils/constants";
import { iconClose, iconHamburger, logo } from "@/assets";
import Image from "next/image";
import React, { FC, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Navbar: FC = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  return (
    <div className=" flex justify-around h-28 items-center relative">
      <div className=" flex justify-between md:block px-3  w-full md:w-max md:ms-6">
        <Image src={logo} alt="Logo" className=" h-7 md:h-10 md:w-56 " />
        <Image
          src={isMobileNavbarOpen ? iconClose : iconHamburger}
          alt="Logo"
          className=" block md:hidden h-5 cursor-pointer"
          onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
        />
      </div>
      <div className=" hidden md:!flex justify-center gap-7 w-full ">
        {navbarMenus.map((item) => (
          <div className=" text-lg hover:text-neutral-darkGrayishBlue cursor-pointer" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="hidden md:block me-8 ">
        <PrimaryButton requireWhiteBG={false}>Get Started</PrimaryButton>
      </div>
      {isMobileNavbarOpen && (
        <div className=" bg-gradient-to-b from-transparent  to-black/40 z-20 h-[90vh] shadow-lg w-screen absolute top-20">
          <div className=" bg-white  shadow-lg w-[95vw] mx-auto ps-3 flex flex-col gap-3 justify-center items-center py-7 rounded-xl">
            {navbarMenus.map((item) => (
              <div className=" text-lg" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
