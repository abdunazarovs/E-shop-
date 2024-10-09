import { Carousel } from "antd";
import React from "react";
import Banner from "../../assets/images/banner.png";
const IntroCarousel = () => {
  return (
    <Carousel className="w-[665px]" autoplay>
      <div className="h-[360px]  bg-teal-400 relative">
        <img src={Banner} alt="" />
        <div className="absolute top-[56px] left-11">
          <h1 className="text-[28px] text-[#1C1C1C] leading-[120%]">
            Latest trending <br />
            <span className="font-bold text-[32px]">Electronic items</span>
          </h1>
          <button className="px-4 py-[11px] bg-white rounded-md text-[#1C1C1C] font-medium mt-[17px]">
            Learn more
          </button>
        </div>
      </div>
      <div className="h-[360px]  bg-teal-400 relative">
        <img src={Banner} alt="" />
        <div className="absolute top-[56px] left-11">
          <h1 className="text-[28px] text-[#1C1C1C] leading-[120%]">
            Latest trending <br />
            <span className="font-bold text-[32px]">Electronic items</span>
          </h1>
          <button className="px-4 py-[11px] bg-white rounded-md text-[#1C1C1C] font-medium mt-[17px]">
            Learn more
          </button>
        </div>
      </div>
      <div className="h-[360px]  bg-teal-400 relative">
        <img src={Banner} alt="" />
        <div className="absolute top-[56px] left-11">
          <h1 className="text-[28px] text-[#1C1C1C] leading-[120%]">
            Latest trending <br />
            <span className="font-bold text-[32px]">Electronic items</span>
          </h1>
          <button className="px-4 py-[11px] bg-white rounded-md text-[#1C1C1C] font-medium mt-[17px]">
            Learn more
          </button>
        </div>
      </div>
      <div className="h-[360px]  bg-teal-400 relative">
        <img src={Banner} alt="" />
        <div className="absolute top-[56px] left-11">
          <h1 className="text-[28px] text-[#1C1C1C] leading-[120%]">
            Latest trending <br />
            <span className="font-bold text-[32px]">Electronic items</span>
          </h1>
          <button className="px-4 py-[11px] bg-white rounded-md text-[#1C1C1C] font-medium mt-[17px]">
            Learn more
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default IntroCarousel;
