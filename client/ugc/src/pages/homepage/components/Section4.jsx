import HeroBg from "../../../assets/herobg.svg";
import vectorline from "../../../assets/vectorline.svg";
import { IoIosArrowDropright } from "react-icons/io";
const Section4 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        clipPath: "polygon(0 20%, 100% 10%, 100% 80%, 0 95%)",
      }}
      className="py-[5rem] w-full"
    >
      <div className="w-[80%] mx-auto">
        <h2 className="text-center font-[600] text-[#F8FAFC] text-[2rem]">
          How it works ?
        </h2>
        <div>
          <div className="flex justify-center">
            <div className="flex items-center">
              <div
                style={{
                  boxShadow:
                    "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                }}
                className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
              >
                1
              </div>
              <div className="relative">
                <img src={vectorline} className="w-[100px]" />
                <IoIosArrowDropright className="absolute text-[2rem] text-[#0041EA]/[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
            <div className="flex items-center">
              <div
                style={{
                  boxShadow:
                    "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                }}
                className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
              >
                2
              </div>
              <div className="relative">
                <img src={vectorline} className="w-[100px]" />
                <IoIosArrowDropright className="absolute text-[2rem] text-[#0041EA]/[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
            <div className="flex items-center">
              <div
                style={{
                  boxShadow:
                    "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                }}
                className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
              >
                3
              </div>
              <div className="relative">
                <img src={vectorline} className="w-[100px]" />
                <IoIosArrowDropright className="absolute text-[2rem] text-[#0041EA]/[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
            <div className="flex items-center">
              <div
                style={{
                  boxShadow:
                    "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                }}
                className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
              >
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
