import CenterSectionLayout from "../../../global/layout/CenterSectionLayout";
import sademoji from "../../../assets/sademoji.svg";
const EmptyOrder = () => {
  return (
    <CenterSectionLayout>
      <div className="bg-gradient from-[#0041EA]/[6%] to-[#2900CD]/[6%] flex items-center justify-center flex-col gap-[1rem] w-full">
        <img src={sademoji} alt="icon" />
        <div className="text-[#0030AB] text-center font-[600] text-[2rem] ">
          No active Orders
        </div>
        <button className="bg-white border border-solid px-[0.5rem] border-black rounded-[4px]">
          create order
        </button>
      </div>
    </CenterSectionLayout>
  );
};

export default EmptyOrder;
