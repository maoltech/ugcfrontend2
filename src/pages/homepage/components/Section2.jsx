import sectionImg from "../../../assets/homesection2.svg";
const Section2 = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="w-[80%] mx-auto">
        <div
          style={{
            backgroundImage: `url(${sectionImg})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
          className="font-[500] text-white text[40px] grid grid-cols-2 items-center my-auto overflow-hidden rounded-[10px]"
        >
          <div className="bg-gradient-to-r from-[#0041EA]/[30%] to-[#FFFF]/[0%] md:py[4rem] py-[2rem] px-[2rem] flex flex-col items-start justify-center gap-[1rem] mx-auto min-h-[400px]">
            <span className="text-[40px] leading-[60px]">
              Make your Mark and become a part of our Team
            </span>
            <span className="text-[1rem]">
              Come join our community and be a part of something great
            </span>
            <button className="text-[#0030AB] text-[0.8rem] py-[8px] px-[16px] bg-white rounded-[10px] shadow-[0px 4px 14px] shadow-[#211D4F/[10%]]">
              Come with Us
            </button>
          </div>
          <div className="px-[1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
