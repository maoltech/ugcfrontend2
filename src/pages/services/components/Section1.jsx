import React from "react";
import ServiceCard from "../../../global/ServiceCard"; 
const Section1 = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-[#111827] text-[30px] font-[800] align-center leading-[80px]">
            <h2> Services For You</h2>
        </div>
        <div className="max-w-[1200px] mx-auto w-full flex flex-wrap justify-center gap-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
    </div>
  );
};

export default Section1;
