import React from "react";
import heroImg from "../../../assets/images/heroImg.svg";
import check from "../../../assets/icons/check.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  const data = [
    "Cursus Integer",
    "Integer Consequat",
    "Tellus Euismod Pellentesque",
    "Aliquot Tristique",
    "Pellentesque Tempus",
    "Mauris Fermentum Praesent",
  ];

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div>
          <h2 className="text-[16px] lg:text-[30px] font-bold text-[#F9B800]">
            risus praesent vulputate.
          </h2>
          <h1 className="text-[36px] lg:text-[80px] font-bold lg:leading-[90px]">
            Cursus Integer <br /> Consequat Tristique.<span>|</span>
          </h1>
          <div className="flex flex-wrap gap-3 my-12 lg:w-2/3">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2  border border-yellow-200 rounded-full  whitespace-nowrap bg-white text-[16.85px] lg:text-[20px]"
              >
                <img src={check} alt="Check Icon" className="w-4 h-4" />
                {item}
              </div>
            ))}
          </div>
          <button className="flex items-center justify-between bg-[#F9B800] gap-12 px-8 py-3 rounded-full text-[18px] lg:text-[24px] font-bold w-full lg:w-1/3">
            <span>Lorem Ipsum</span>
            <FaArrowRightLong />
          </button>
        </div>
        <div>
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
