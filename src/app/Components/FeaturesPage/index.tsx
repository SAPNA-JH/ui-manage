import { featureContent } from "@/app/utils/constants";
import React, { FC } from "react";

const FeaturesPage: FC = () => {
  return (
    <div className=" min-h-[70vh] w-screen mt-6 md:mt-0  flex flex-col justify-center items-center md:flex-row px-2 ">
      <div className=" w-full md:w-1/2  h-3/5">
        <div className=" w-full md:w-3/5 mx-auto  flex flex-col h-full gap-5">
          <p className=" text-2xl md:text-4xl text-center w-1/2 mx-auto md:w-full md:text-left font-semibold text-neutral-veryDarkBlue">
            What's different about Manage?
          </p>
          <p className=" text-center md:text-left text-neutral-darkGrayishBlue mb-6 md:w-3/5 mx-auto">
            Manage provides all the functionality your team needs,without the
            complexity. Oursoftware is tailor-made fo modern digital product
            teams
          </p>
        </div>
      </div>
      <div className=" w-full md:w-1/2 ">
        <div className=" w-full md:w-3/5 mx-auto  flex flex-col gap-6">
          {featureContent.map((item, index) => (
            <div key={index} className=" flex gap-5">
              <p className=" px-6 py-2 h-max rounded-full bg-primary-brightRed text-white">
                0{index + 1}
              </p>
              <div className=" flex flex-col gap-3">
                <p className=" text-neutral-veryDarkBlue font-bold">
                  {item.heading}
                </p>
                <p className=" text-neutral-darkGrayishBlue">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
