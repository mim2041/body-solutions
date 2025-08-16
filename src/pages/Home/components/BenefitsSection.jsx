import React from "react";
import check from "../../../assets/icons/checkOrange.svg";
import benefitImg from "../../../assets/images/benefitImg.svg";
import { FaA, FaArrowRightLong } from "react-icons/fa6";

const BenefitsSection = () => {
  const benefits = [
    "Ac viverra sed risus praesent vulputate.",
    "Natoqu consectetur pulvinar.",
    "Sollicitudin ornare tempus nulla varius pulvinar.",
    "Varius pulvinar",
    "Natoque id tellus consectetur",
    "Vulputate et vulputate suspendisse",
  ];

  return (
    <div className="relative w-full overflow-hidden py-20 -mt-[250px]">
      <section
        className="relative bg-[#262626] overflow-hidden w-full h-screen my-12 py-12 -rotate-[7deg] flex items-end flex-col justify-end"
        style={{
          backgroundColor: "#F9B800",
          width: window.innerWidth < 1024 ? "150vw" : "120vw", // Wider on mobile
          height: window.innerWidth < 1024 ? "150vh" : "130vh", // Taller on mobile
          marginLeft: window.innerWidth < 1024 ? "-25vw" : "-10vw", // More negative margin on mobile
        }}
      >
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 rotate-[7deg] py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Block */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-[50px] font-bold text-gray-800 leading-[120%]">
                Cursus Integer consequat Tristique.
              </h2>

              <div className="flex flex-wrap gap-3 my-12 lg:w-full">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white py-4 px-6 rounded-full"
                  >
                    <img src={check} alt="Check Icon" className="" />
                    <span className="text-gray-800 font-semibold text-[20px]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 flex items-center w-1/3 justify-between">
                Lorem Ipsum
                <FaArrowRightLong className="w-5 h-5" />
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={benefitImg}
                  alt="Benefits Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
