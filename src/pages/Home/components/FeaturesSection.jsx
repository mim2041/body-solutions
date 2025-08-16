import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import join from "../../../assets/icons/1.svg";
import magna from "../../../assets/icons/2.svg";
import pulvinar from "../../../assets/icons/3.svg";
import phir from "../../../assets/icons/4.svg";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import { Swiper as SwiperClass } from "swiper";
import customer from "../../../assets/images/customer.svg";

const FeaturesSection = () => {
  const swiperRef = useRef();

  const testimonials = [
    {
      id: 1,
      name: "Molly Davidson",
      text: "Fuismod magna id purus eget nunc, ligula suspendisse dui nebus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='hair' patternUnits='userSpaceOnUse' width='3' height='3'%3E%3Ccircle cx='1.5' cy='1.5' r='0.8' fill='%23333'/%3E%3C/pattern%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='100' fill='%23f0f0f0'/%3E%3Cellipse cx='100' cy='70' rx='70' ry='50' fill='url(%23hair)'/%3E%3Cpath d='M70 120 Q100 140 130 120' stroke='%23333' stroke-width='3' fill='none'/%3E%3Ccircle cx='80' cy='90' r='3' fill='%23333'/%3E%3Ccircle cx='120' cy='90' r='3' fill='%23333'/%3E%3Cpath d='M90 110 Q100 120 110 110' stroke='%23333' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "John Smith",
      text: "Amazing experience working with this team. The results exceeded our expectations and the process was smooth from start to finish.",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23e0e0e0'/%3E%3Crect x='70' y='60' width='60' height='40' fill='%23333'/%3E%3Ccircle cx='80' cy='90' r='3' fill='%23fff'/%3E%3Ccircle cx='120' cy='90' r='3' fill='%23fff'/%3E%3Cpath d='M85 110 Q100 125 115 110' stroke='%23333' stroke-width='3' fill='none'/%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      text: "Professional, creative, and reliable. They delivered exactly what we needed and more. Highly recommend their services.",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23f5f5f5'/%3E%3Cpath d='M60 70 Q100 50 140 70 L140 100 Q100 120 60 100 Z' fill='%23d4a574'/%3E%3Ccircle cx='85' cy='90' r='3' fill='%23333'/%3E%3Ccircle cx='115' cy='90' r='3' fill='%23333'/%3E%3Cpath d='M90 110 Q100 120 110 110' stroke='%23333' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    },
  ];
  const features = [
    {
      id: 1,
      icon: join,
      title: "Phasellus Vitae",
      subtitle: "Quisque Porttitor Vitae Vel Amet",
      color: "bg-white",
      dot: "text-[#F9B800]",
    },
    {
      id: 2,
      icon: magna,
      title: "Iaculis Magna",
      subtitle: "Porttitor Neque Scelerisque Mattis.",
      color: "bg-[#F9B800]",
      dot: "text-white",
    },
    {
      id: 3,
      icon: pulvinar,
      title: "Eleifend Pulvinar",
      subtitle: "Vitae Consectetur Nibh Velit",
      color: "bg-[#F9B800]",
      dot: "text-white",
    },
    {
      id: 4,
      icon: phir,
      title: "Velit Odio Phir",
      subtitle: "Ametneq Magna Consectetur Leo",
      color: "bg-white",
      dot: "text-[#F9B800]",
    },
  ];

  return (
    <div className="relative w-full ">
      <div className="overflow-hidden py-20">
        <section
          className="relative bg-[#262626] overflow-hidden w-full h-screen my-12 py-12 -rotate-[7deg] flex items-center flex-col "
          style={{
            backgroundColor: "#262626",
            width: window.innerWidth < 1024 ? "150vw" : "120vw", // Wider on mobile
            height: window.innerWidth < 1024 ? "150vh" : "160vh", // Taller on mobile
            marginLeft: window.innerWidth < 1024 ? "-25vw" : "-10vw", // More negative margin on mobile
          }}
        >
          <div className="relative z-10 w-full mx-auto  py-12 px-4 sm:px-6 lg:px-8 rotate-[7deg] max-w-[1600px] overflow-hidden ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <p className="text-[20px] leading-relaxed max-w-lg text-[#F9B800] ">
                  Quisque porttitor vitae vel amet neque scelerisque mattis.
                  Consectetur nibh velit magna consectetur leo.
                </p>
                <h2 className="text-[36px] lg:text-[50px] font-bold leading-tight">
                  Cursus Integer Conseq Aliquam Tristique.
                </h2>
                <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3">
                  Lorem Ipsum
                  <FaArrowRightLong />
                </button>
              </div>

              {/* Right Content - Feature Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`${feature.color} ${
                      feature.id % 2 != 0 ? "-mt-12" : "mt-12 "
                    } rounded-[57px] p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[335px] lg:w-[350px] h-[300px] lg:h-[350px] flex flex-col justify-between z-10`}
                  >
                    <div className="text-2xl mb-4">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="text-[68.9px] lg:text-[72px] font-bold text-black mb-2">
                      {feature.id}
                      <span className={`${feature.dot} `}>.</span>
                    </div>
                    <h3 className="text-[22.97px] lg:text-[24px] font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="absolute max-w-[1650px] mx-auto bg-white -bottom-24 rounded-[100px] h-[600px] mx-auto w-full overflow-hidden flex flex-col items-center justify-center z-20 left-[7%]">
        <div className="relative">
          <Swiper
            loop={false}
            modules={[A11y, Autoplay]}
            spaceBetween={20}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            a11y={{ enabled: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            className="max-w-sm md:max-w-md lg:max-w-[1600px]"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex items-start md:items-center justify-center gap-3 md:gap-8 mb-8 relative lg:px-20">
                  <div className="flex items-center gap-16 items-center justify-center">
                    {/* Left Side - Profile Image */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="relative">
                        <img src={customer} alt="" />
                      </div>
                    </div>

                    {/* Right Side - Testimonial */}
                    <div className="text-center lg:text-left space-y-8">
                      <h2 className="text-[30px] lg:text-[50px] font-bold text-gray-800">
                        What our customers thought?
                      </h2>

                      <blockquote className="text-[16px] lg:text-[30px] text-gray-700 leading-relaxed  mx-auto lg:mx-0">
                        "Euismod magna id purus eget nunc ligula suspendisse dui
                        <br />
                        netus. Condimentum blandit rutrum at mauris enim
                        pulvinar <br />
                        duis etiam duis."
                      </blockquote>

                      <div className="text-center lg:text-left">
                        <cite className="text-[24px] font-bold text-[#262626] not-italic">
                          Holly Davidson
                        </cite>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="flex items-center justify-center lg:justify-start gap-4">
                        <button
                          className="w-10 h-10 rounded-full  transition-colors duration-300 flex items-center justify-center"
                          onClick={() => swiperRef.current?.slidePrev()}
                        >
                          <FaArrowLeftLong className="w-5 h-5 " />
                        </button>
                        <button
                          className={`w-10 h-10 rounded-full  transition-colors duration-300 flex items-center justify-center ${
                            swiperRef.current?.isEnd
                              ? " cursor-not-allowed"
                              : "text-[#F9B800]"
                          }`}
                          onClick={() => swiperRef.current?.slideNext()}
                        >
                          <FaArrowRightLong className="w-5 h-5 " />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
