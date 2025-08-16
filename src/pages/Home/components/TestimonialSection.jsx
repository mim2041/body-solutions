import React from "react";

const TestimonialSection = () => {
  return (
    <section className="relative mx-auto w-full py-20 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute max-w-[1650px] mx-auto bg-white -top-[50%] w-full z-20  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gray-300 overflow-hidden border-4 border-yellow-400">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="text-center lg:text-left space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              What our customers thought?
            </h2>

            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              "Euismod magna id purus eget nunc ligula suspendisse dui netus.
              Condimentum blandit rutrum at mauris enim pulvinar duis etiam
              duis."
            </blockquote>

            <div className="text-center lg:text-left">
              <cite className="text-xl font-bold text-gray-800 not-italic">
                Holly Davidson
              </cite>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
