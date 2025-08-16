import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <section className="relative bg-yellow-100 py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Left Content */}
        <div className="flex items-center justify-between w-full mb-10 mx-auto">
          <h2 className="text-3xl lg:text-[50px] font-bold leading-tight">
            Vulputate et pulvinar ethre <br />
            Suspendisse tellus consecteur
          </h2>

          <button className="bg-[#F9B800] px-8 py-4 rounded-full font-bold text-[20px] hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-3 lg:w-[350px] justify-between">
            Lorem Ipsum
            <FaArrowRightLong />
          </button>
        </div>

        <hr />
        {/* Right Content */}
        <div className="flex items-center justify-between mt-8 text-sm lg:text-[20px] font-semibold">
          <p>Copyright © 2022 Lorem Ipsum.</p>
          <div className="">
            <a
              href="#"
              className="hover:text-gray-800 transition-colors duration-300 underline"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="hover:text-gray-800 transition-colors duration-300 underline"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
