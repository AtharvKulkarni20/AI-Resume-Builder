import React from "react";
import { Accenture, booking, dhl, KMPG, AE, amazon, apple, google } from "../../assets";

const images = [Accenture, booking, dhl, AE, amazon, apple, google];

const Companies = () => {
  return (
    <>
      <div className="text-center">
        <div>

        <h1 className="text-[42px] font-bold bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-transparent">
          You can land a job at companies like
        </h1>
        </div>
        <div className="flex justify-center mt-20">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="w-48 object-contain mx-4  rounded-xl shadow-[0_0_15px_#00FFFF] backdrop:blur-md  hover:-translate-y-3 transition-transform duration-300"

            />
          ))}

        </div>
      </div>
    </>
  );
};

export default Companies;
