"use client";
import { navbarMenus } from "@/app/utils/constants";
import {
  iconFacebook,
  iconInstagram,
  iconPinterest,
  iconTwitter,
  iconYouTube,
  logo,
} from "@/assets";
import Image from "next/image";
import React, { FC, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Footer: FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<any>(null);
  return (
    <div className=" bg-neutral-veryDarkBlue w-screen md:h-60 z-10 flex flex-col-reverse md:flex-row text-white py-6 px-4">
      <div className=" w-full md:w-1/4 h-full flex flex-col-reverse md:flex-col items-center justify-evenly gap-8">
        <div className=" text-neutral-darkGrayishBlue text-sm block md:hidden">
          Copyright {new Date().getFullYear()}.All Right Reserved.
        </div>
        <Image src={logo} alt="Logo" className=" invert" />
        <div className=" flex gap-5 items-center justify-center ">
          {[
            iconFacebook,
            iconInstagram,
            iconPinterest,
            iconTwitter,
            iconYouTube,
          ].map((item, index) => (
            <Image src={item} key={index} className="" alt="S-icons" />
          ))}
        </div>
      </div>
      <div className=" flex  w-full  justify-around py-5 px-3  mb-6">
        {" "}
        <div className=" w-full md:w-1/5 h-full flex  justify-center gap-4 flex-col hover:text-neutral-darkGrayishBlue cursor-pointer">
          {navbarMenus.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <div className=" w-full md:w-1/5 h-full flex  justify-center gap-4 flex-col">
          {["Carrer", "Community", "Privacy Policy"].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
      <div className=" w-full md:w-1/4 h-full flex flex-col justify-evenly">
        <div className=" flex gap-3 ">
          <div>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => {
                setError(null);
                setEmail(e.target.value);
              }}
              className=" focus:outline-none rounded-2xl px-3 py-2 text-black"
              placeholder="Updates in your Inbox..."
            />
            {error !== null && <p className=" text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <div
            className=" bg-primary-brightRed px-6 py-2 rounded-3xl cursor-pointer h-max"
            onClick={() => {
              if (email.trim().length === 0) {
                setError("Email Cannot be empty!");
                return;
              }
              if (!email.includes("@") || !email.includes(".")) {
                setError("Invalid Email format");
                return;
              }
            }}
          >
            Go
          </div>
        </div>
        <div className=" text-neutral-darkGrayishBlue text-sm md:block hidden">
          Copyright {new Date().getFullYear()}.All Right Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
