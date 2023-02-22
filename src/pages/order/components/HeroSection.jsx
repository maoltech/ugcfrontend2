import CenterSectionLayout from "../../../global/layout/CenterSectionLayout";
import HeroBg from "../../../assets/homeimg.svg";
const HeroSection = () => {
  return (
    <CenterSectionLayout>
      <div
        style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
        className="rounded-[10px] py-[2rem] w-full flex flex-col items-start justify-center gap-[0.8rem] text-[#F8FAFC]"
      >
        <span className="font-[600] text-[50px]">Hi Robert,</span>
        <span className="font-[400] text-[20px]">Here are your orders !</span>
      </div>
    </CenterSectionLayout>
  );
};

export default HeroSection;
