import CenterSectionLayout from "../../../global/layout/CenterSectionLayout";
import sademoji from "../../../assets/sademoji.svg";
const EmptyOrder = () => {
  return (
    <CenterSectionLayout>
      <div className="bg-gradient from-[#0041EA]/[6%] to-[#2900CD]/[6%] flex items-center justify-center">
        <img src={sademoji} alt="icon" />
        <button>create order</button>
      </div>
    </CenterSectionLayout>
  );
};

export default EmptyOrder;
