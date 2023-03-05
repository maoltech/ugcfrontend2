import HeroBg from "../../../assets/aboutmebg.svg";
import camera from "../../../assets/camera.svg";
import Button from "../../../global/Button";
import { HiUserCircle } from "react-icons/hi";
import { GoVerified } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendarEvent, TbLanguageKatakana } from "react-icons/tb";

const HeroSeection = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-[85%] mx-auto">
        <div
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
          className="rounded-[10px] py-[2rem] w-full"
        >
          <div className="grid grid-cols-3 justify-items-center items-center content-between w-[95%] mx-auto gap-[1rem]">
            <div>
              <div className="flex bg-[#F8FAFC] p-[15px] flex flex-col items-center justify-start">
                <div className="relative">
                  <HiUserCircle className="text-[4rem] text-[#0030AB]/[6%]" />
                  <GoVerified className="absolute bottom-[-5%]" />
                  <img
                    src={camera}
                    alt=""
                    className="absolute bottom-[-3%] left-[1%]"
                  />
                </div>
                <div className="flex items-end gap-[0.2rem]">
                  <h1>Robert Michaelis</h1>
                  <span className="bg-[#38C675] h-[10px] w-[10px] rounded-full"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between">
              <h2>About Me</h2>
              <div>
                <div className="flex items-center gap-[0.5rem]">
                  <CiLocationOn />
                  <span>Berlin, Germany</span>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <TbCalendarEvent />
                  <span>1980-09-13</span>
                </div>
                <div className="flex items-start gap-[0.5rem]">
                  <TbLanguageKatakana />
                  <div className="flex flex-col items-start justify-start">
                    <span>English - Fluent</span>
                    <span>Registered on June 03 2022</span>
                    <span>More Informations</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center justify-between content-between justify-items-between gap-[0.5rem]">
                <div className="bg-[#F8FAFC] rounded-[4px] flex flex-col items-start justify-start py-[10px] px-[5px] gap-[8px]">
                  <span>30</span>
                  <span className="font-[400] text-[14px]">
                    Happy Customers
                  </span>
                </div>
                <div className="bg-[#F8FAFC] rounded-[4px] flex flex-col items-start justify-start py-[10px] px-[5px] gap-[8px]">
                  <span>30</span>
                  <span className="font-[400] text-[14px]">UGC completed</span>
                </div>
                <div className="bg-[#F8FAFC] rounded-[4px] flex flex-col items-start justify-start py-[10px] px-[5px] gap-[8px]">
                  <span>30</span>
                  <span className="font-[400] text-[14px]">User Reviews</span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSeection;
