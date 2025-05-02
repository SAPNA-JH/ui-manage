import { testimonials } from "@/app/utils/constants";
import { bgSimplifySectionTablet } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Testimonials: FC = () => {
  return (
    <div className=" min-h-[75vh] w-screen relative pt-16 ">
      <Image
        src={bgSimplifySectionTablet}
        alt="BgSimplfyTablet"
        className=" absolute -top-[25rem] -left-[35rem] -z-10"
      />
      <p className=" text-4xl text-center text-neutral-veryDarkBlue font-bold">
        What they've said:
      </p>
      <div className=" flex flex-col md:flex-row w-full justify-evenly my-7">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center gap-3  w-[90%] md:w-[30%] relative py-8 rounded-md px-3 "
          >
            <div className=" h-[72%] bottom-0 w-full absolute -z-10 bg-neutral-veryLightGray"></div>
            <Image
              src={item.image}
              alt={item.name}
              className=" h-20 w-20 rounded-xl"
            />
            <p className=" text-neutral-veryDarkBlue font-bold">{item.name}</p>
            <p className=" text-neutral-darkGrayishBlue text-center ">
              "{item.quote}"
            </p>
          </div>
        ))}
      </div>
      <div className=" flex justify-center w-full mt-9">
        <PrimaryButton requireWhiteBG={false}>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default Testimonials;
