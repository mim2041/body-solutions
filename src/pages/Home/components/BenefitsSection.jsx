import React from "react";

const BenefitsSection = () => {
  const benefits = [
    "Ac viverra sed risus praesent vulputate.",
    "Natoqu consectetur pulvinar.",
    "Sollicitudin ornare tempus nulla varius pulvinar.",
    "Varius pulvinar",
    "Vulputate et vulputate suspendisse",
  ];

  return (
    <div className="relative w-full overflow-hidden py-20 -mt-[250px]">
      <section
        className="relative bg-[#262626] overflow-hidden w-full h-screen my-12 py-12 -rotate-[7deg] flex items-end flex-col justify-end"
        style={{
          backgroundColor: "#F9B800",
          width: window.innerWidth < 1024 ? "150vw" : "120vw", // Wider on mobile
          height: window.innerWidth < 1024 ? "150vh" : "140vh", // Taller on mobile
          marginLeft: window.innerWidth < 1024 ? "-25vw" : "-10vw", // More negative margin on mobile
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rotate-[7deg] border">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Block */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Cursus Integer consequat Tristique.
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 flex items-center gap-3">
                Lorem Ipsum
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main person illustration */}
                <div className="w-64 h-64 bg-yellow-200 rounded-full flex items-center justify-center mb-8">
                  <div className="w-48 h-48 bg-yellow-300 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  🛒
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  📄
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  %
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  📋
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
