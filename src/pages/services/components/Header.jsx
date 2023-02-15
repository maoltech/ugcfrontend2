import Logo from "../../../assets/logo.svg";
import Button from "../../../global/Button";
import { TbNews } from "react-icons/tb";
import { HiOutlineBell } from "react-icons/hi";
import {MdKeyboardArrowDown} from "react-icons/md"

const Header = () => {
  return (
    <div className="w-full bg-[#F8FAFC] shadow-[0px 2px 6px] shadow-[#0000]/[6%]">
      <div className="grid grid-cols-[60%_40%] w-[80%] mx-auto py-[0.2rem] content-center text-[1rem] font-[400] leading-[27px] text-[#111827]">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            className="w-[100px] h-[60px] justify-self-start"
          />
        </div>
        <div className="flex items-center justify-end">
          <Button>Services</Button>
          <Button>Orders</Button>
          <TbNews className={"text-[#9CA3AF] w-[45px] h-[26.44444465637207px] border-0 rounded-none"}/>
          <HiOutlineBell className={"text-[#9CA3AF] w-[45px] h-[26.44444465637207px] border-0 rounded-none"}/>
          <div className={"bg-[#0030AB]/[6%] w-[46px] h-[46px] rounded-full text-[#111827]"}>
            <div>            
              Robert Michaelis
            </div>

            <MdKeyboardArrowDown />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
