import HeroBg from "../../../assets/aboutmebg.svg";
import camera from "../../../assets/camera.svg";
import Button from "../../../global/Button";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { GoVerified } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendarEvent, TbLanguageKatakana } from "react-icons/tb";

const HeroSection = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-[85%] mx-auto">
        <div
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
          className="rounded-[10px] py-[2rem] w-full"
        >
          <div className="grid grid-cols-3 justify-items-center items-center content-between w-[95%] mx-auto gap-[1rem]">
            <div className="bg-[#F8FAFC] rounded-[10px] min-w-[200px]">
              <div className="mx-auto px-[15px] py-[10px] flex flex-col items-center justify-center gap-[0.5rem]">
                <div className="relative">
                  <HiUserCircle className="text-[6rem] text-[#0030AB]/[6%]" />
                  <GoVerified className="absolute text-[#0030AB] bottom-[5%] left-[50%] translate-x-[-50%]" />
                  <img
                    src={camera}
                    alt=""
                    className="w-[1rem] h-[1rem] absolute bottom-[25%] cursor-pointer right-[1%]"
                  />
                </div>
                <div className="flex items-center gap-[0.2rem]">
                  <h1>
                    {user?.firstName} {user?.lastName}
                  </h1>
                  <span className="bg-[#38C675] h-[10px] w-[10px] rounded-full"></span>
                </div>
                <div>
                  <p>UGC Creator</p>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <span>
                    <AiFillStar className="text-[#FAB005]" />
                  </span>
                  <span>4.5(200)</span>
                </div>
                <div className="w-full mx-auto flex items-center justify-center">
                  <Button className="bg-[#0030AB] mx-auto text-[0.8rem] text-white w-[90%] m-auto">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between text-white">
              <h2>About Me</h2>
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="flex font-[400] text-[14px] items-center gap-[0.5rem]">
                  <CiLocationOn />
                  <span>Berlin, Germany</span>
                </div>
                <div className="flex font-[400] text-[14px] items-center gap-[0.5rem]">
                  <TbCalendarEvent />
                  <span>1980-09-13</span>
                </div>
                <div className="flex font-[400] text-[14px] items-start gap-[0.5rem]">
                  <TbLanguageKatakana />
                  <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                    <span>English - Fluent</span>
                    <span>Registered on June 03 2022</span>
                    <span>More Informations</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center justify-between content-between justify-items-between gap-[0.5rem]">
                <div className="bg-[#F8FAFC] rounded-[4px] flex flex-col items-start justify-start py-[10px] px-[5px] gap-[8px]">
                  <span className="font-[500] text-[#0030AB] text-[20px]">
                    30
                  </span>
                  <span className="font-[400] text-[14px] text-[#111827]">
                    Happy Customers
                  </span>
                </div>
                <div className="bg-[#F8FAFC] rounded-[4px] flex flex-col items-start justify-start py-[10px] px-[5px] gap-[8px]">
                  <span className="font-[500] text-[#38C675] text-[20px]">
                    30
                  </span>
                  <span className="font-[400] text-[14px] text-[#111827]">
                    UGC completed
                  </span>
                </div>
                <div className="bg-[#F8FAFC] rounded-[4px] flex flex-col items-start justify-start py-[10px] px-[5px] gap-[8px]">
                  <span className="font-[500] text-[#FAB005] text-[20px]">
                    30
                  </span>
                  <span className="font-[400] text-[14px] text-[#111827]">
                    User Reviews
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-white text-[12px] gap-[2rem]">
              <div className="rounded-[10px] border border-solid border-white px-[0.3rem] py-[0.2rem] flex items-center gap-[0.5rem] self-end cursor-pointer">
                <BiCamera />
                <span>Upload Banner</span>
              </div>
              <div className="flex items-start gap-[1rem]">
                <div>
                  <p>Description</p>
                </div>
                <div>
                  <p>
                    As VP of Growth at EuroVPS, I had to make a LOT of
                    decisions, daily. This got exhausting, especially if I had
                    multiple good ideas on how to do something, but wasn't sure.
                    Does this resonate? If so, I'd love to try and help you..
                    ally if I had multiple good ideas on how to do something,
                    but wasn't sure. Does this resonate? If so, I'd love to try
                    and help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
