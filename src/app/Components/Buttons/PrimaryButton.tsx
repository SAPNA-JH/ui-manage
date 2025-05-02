import React, { FC, ReactNode } from "react";

const PrimaryButton: FC<{ children: ReactNode; requireWhiteBG: boolean }> = ({
  children,
  requireWhiteBG,
}) => {
  return (
    <div
      className={`${
        requireWhiteBG ? "bg-white" : "bg-primary-brightRed text-white"
      }   w-40 h-12 flex justify-center items-center font-semibold rounded-3xl text-md  shadow-lg shadow-primary-brightRed/70 cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
