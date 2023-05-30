import React from "react";
import { Carousel } from "react-responsive-carousel";
import { slides } from "./data";

const RightContent = () => {
  return (
    <div className="bg-cover bg-img">
      <Carousel autoPlay={true} showArrows={false}>
        {slides?.map((item, index) => (
          <div className="h-screen" key={index}>
            <img className="opacity-0" src="" alt="." />
            <div className="pt-24 pl-20 text-left">
              <h4 className="text-5xl text-white">{item.subTitleOne}</h4>
              <h2 className="text-yellow-400 text-6xl uppercase font-bold mt-3 inline-block mr-7">
                {item.colored}
              </h2>
              <h4 className="text-5xl text-white inline-block">
                {item.subTitleTwo}
              </h4>
              <h2 className="text-white text-6xl uppercase font-bold mt-3 mr-7">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RightContent;
