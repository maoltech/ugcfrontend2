import mockup from "../../../assets/mockup.svg";
import Button from "../../../global/Button";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
const Section3 = () => {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="w-[80%] mx-auto grid grid-cols-[35%_65%] items-center content-between justify-items-center">
        <div className="relative flex justify-center">
          <IoIosArrowDropleft className="absolute text-[2rem] text-[#0041EA]/[80%] top-[50%] left-[1%] translate-y-[-50%]" />
          <IoIosArrowDropright className="absolute text-[2rem] text-[#0041EA]/[80%] top-[50%] right-[1%] translate-y-[-50%]" />
          <img
            src={mockup}
            alt="mockup"
            className="mx-auto w-[300px] h-[450px]"
          />
        </div>
        <div className="flex flex-col items-start justify-end gap-[1rem]">
          <h2 className="font-[600] text-[#111827] text-[2.3rem] text-right w-full tracking-wide mxauto leading[65px]">
            We provide high quality UGC
          </h2>
          <span className="text-right justify-self-end">
            We can provide you with a variety of content such as unboxing,
            product demos, reviews, trend setters, and selfies.
          </span>
          <div className="flex justify-between w-full">
            <Button
              className={
                "bg-gradient-to-r from-[#0041EA] to-[#2900CD] text-white"
              }
            >
              Unboxing
            </Button>
            <Button
              className={
                "border-[#0041EA] border-[1px] bg-clip-text text-transparent bg-gradient-to-r from-[#0041EA] to-[#2900CD] "
              }
            >
              Product Demos
            </Button>
            <Button
              className={
                "border-[#0041EA] border-[1px] bg-clip-text text-transparent bg-gradient-to-r from-[#0041EA] to-[#2900CD] "
              }
            >
              Reviews
            </Button>
            <Button
              className={
                "border-[#0041EA] border-[1px] bg-clip-text text-transparent bg-gradient-to-r from-[#0041EA] to-[#2900CD] "
              }
            >
              Trend Setter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
