import CenterSectionLayout from "../../../global/layout/CenterSectionLayout";
import HeroBg from "../../../assets/herobg.svg";
import { useSelector } from "react-redux";
const HeroSection = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <CenterSectionLayout>
      <div
        style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
        className="rounded-[10px] p-[2rem] w-full text-[#F8FAFC]"
      >
        <div className="grid grid-cols-5 gap-[2rem] justify-items-center items-center content-between w-[95%] mx-auto">
          <div className="flex flex-col items-start justify-start">
            <div className="w-full">
              <span className="font-[600] text-[50px]">
                Hi {user?.firstName},
              </span>
            </div>
            <div>
              <span className="font-[400] text-[15px]">
                Here are your orders !
              </span>
            </div>
          </div>
        </div>
      </div>
    </CenterSectionLayout>
  );
};

export default HeroSection;
