import HeroBg from "../../../assets/herobg.svg";
import HeroImg from "../../../assets/homeimg.svg";
import Button from "../../../global/Button";
const HeroSection = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
          className="rounded-[10px] py-[1rem] w-full"
        >
          <div className="grid grid-cols-[60%_40%] justify-items-center items-center content-between w-[90%] mx-auto">
            <div>
              <h2 className="text-[#F8FAFC] text-[30px] leading-[50px]">
                Get user-generated content at a crazy-affordable price. We're a
                dream for marketers and agencies.
              </h2>
              <Button className={"bg-[#0030AB] text-white"}>
                Get Your UGC Today
              </Button>
            </div>
            <img src={HeroImg} alt="img" className="w-[250px] h-[290px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
