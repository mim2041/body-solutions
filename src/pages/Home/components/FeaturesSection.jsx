import { FaArrowRightLong } from "react-icons/fa6";
import join from "../../../assets/icons/1.svg";
import magna from "../../../assets/icons/2.svg";
import pulvinar from "../../../assets/icons/3.svg";
import phir from "../../../assets/icons/4.svg";

const FeaturesSection = () => {
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
    <div className=" w-full overflow-hidden lg:py-20">
      <section
        className="relative bg-[#262626] overflow-hidden w-full my-10 h-screen -rotate-[7deg] flex items-center flex-col "
        style={{
          backgroundColor: "#262626",
          width: window.innerWidth < 1024 ? "150vw" : "120vw", // Wider on mobile
          height: window.innerWidth < 1024 ? "150vh" : "140vh", // Taller on mobile
          marginLeft: window.innerWidth < 1024 ? "-25vw" : "-10vw", // More negative margin on mobile
        }}
      >
        <div className="relative z-10 w-full mx-auto flex flex-col justify-center items-center my-auto py-20 px-4 sm:px-6 lg:px-8 rotate-[7deg] max-w-[1600px] overflow-hidden">
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
                  } rounded-[57px] p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[335px] lg:w-[350px] h-[382px] lg:h-[400px] flex flex-col justify-between z-10`}
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
  );
};

export default FeaturesSection;
