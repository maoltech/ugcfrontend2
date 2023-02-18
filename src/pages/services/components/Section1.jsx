import React from "react";
import ServiceCard from "../../../global/ServiceCard";
import { Pagination } from "antd";
const Section1 = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-[#111827] text-center text-[30px] font-[800] align-center leading-[80px]">
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
          <Pagination
            total={50}
            current={2}
            pageSize={10}
          />
        </div>
    </div>
  );
};

export default Section1;
