import { useState } from "react";
import flag from "../../assets/images/flag.svg";
import dropdown from "../../assets/icons/dropdown.svg";

export default function FlagDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("GB");

  const countries = [
    { code: "GB", flag: flag },
    { code: "US", flag: flag },
    { code: "FR", flag: flag },
  ];

  const selectedOption = countries.find(
    (country) => country.code === selectedCountry
  );

  return (
    <div className="relative inline-block">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white  rounded-md cursor-pointer hover:border-blue-500 transition-all duration-200 min-w-[80px]"
      >
        <img
          src={selectedOption?.flag}
          alt={selectedOption?.code ?? "Flag"}
          className="object-contain w-[27px] lg:w-9 h-[18px] lg:h-6  lg:mr-4"
        />
        <img src={dropdown} alt="Dropdown" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 border-t-0 rounded-b-md shadow-lg z-50">
          {countries.map((country) => (
            <div
              key={country.code}
              onClick={() => {
                setSelectedCountry(country.code);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <Image
                src={country.flag}
                alt={country.code}
                className="object-contain w-[27px] lg:w-9 h-[18px] lg:h-6  lg:mr-4"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
