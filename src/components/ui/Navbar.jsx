import React from "react";
import logo from "../../assets/logos/logo.svg";
import FlagDropdown from "../common/FlagDropdown";

const Navbar = () => {
  return (
    <div className="px-2 md:px-20 py-8 lg:py-12  w-full mx-auto z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between bg-white w-full rounded-full py-2 lg:py-4 px-6 border">
        <div className="hidden md:block"></div>
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-[95px] lg:w-[127px] h-[47px] lg:h-[63px]"
          />
        </div>
        <div>
          <FlagDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
