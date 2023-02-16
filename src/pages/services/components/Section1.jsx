import React from "react";
import ServiceCard from "../../../global/ServiceCard"; 
const Section1 = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-[#111827] text-[30px] font-[800] align-center leading-[80px]">
            <h2> Services For You</h2>
        </div>
        <ServiceCard className="w-[50px] h-[50px]"/>
    </div>
  );
};

export default Section1;
