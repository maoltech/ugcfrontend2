import ServiceCard from "../../../global/ServiceCard";
import { Pagination } from "antd";
const Section1 = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full flex flex-col items-start justify-start gap-[1rem]">
      <div className="text-[#111827] text-center text-[30px] font-[500] align-center leading-[80px] w-full">
        <h2> Services For You</h2>
      </div>
      <div className="max-w-[1200px] w-[80%] mx-auto grid grid-cols-4 justify-items-start content-center flexwrap justify-center gap-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex items-center justify-center w-full">
        <Pagination total={50} current={2} pageSize={10} />
      </div>
    </div>
  );
};

export default Section1;
