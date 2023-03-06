import Logo from "../assets/logo.svg";
import Button from "./Button";
import PopOverLay from "./antd/PopOver";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TbNews } from "react-icons/tb";
import {
  HiOutlineBell,
  HiOutlineUserCircle,
  HiUserCircle,
} from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUserCheck, FiSettings } from "react-icons/fi";
import { CgSearchFound } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";

const ProfileDropDown = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-center border-t border-solid border-[#E5E7EB] w-[100%] mx-auto text-[#374151] text-[15px] gap-[0.5rem] pt-[0.5rem]">
        <div className="flex flex-col items-start justify-start gap-[0.8rem]">
          <div className="flex items-center justify-between gap-[0.5rem] cursor-pointer">
            <HiOutlineUserCircle />
            <Link to="/aboutme">About Me</Link>
          </div>
          <div className="flex items-center gap-[0.5rem] cursor-pointer">
            <FiUserCheck />
            <span>Become a UGC Creator</span>
          </div>
          <div className="flex items-center gap-[0.5rem] cursor-pointer">
            <CgSearchFound />
            <span>Send Search Request</span>
          </div>
          <div className="flex items-center gap-[0.5rem] cursor-pointer">
            <TfiWorld />
            <span>Language</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.8rem] border-t border-solid border-[#E5E7EB] w-[100%]">
          <div className="flex items-center gap-[0.5rem] pt-[0.5rem] cursor-pointer">
            <FiSettings />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-[0.5rem] cursor-pointer">
            <BiLogOut />
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState("");
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="w-full bg-[#F8FAFC] shadow-[0px 2px 6px] shadow-[#0000]/[6%]">
      <div className="grid grid-cols-[50%_50%] w-[80%] max-w-[1200px] mx-auto py-[0.2rem] content-center text-[1rem] font-[400] leading-[27px] text-[#111827]">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            className="w-[100px] h-[60px] justify-self-start"
          />
        </div>
        <div className="flex items-center justify-end">
          <Button className="bg-clip-text text-transparent bg-gradient-to-r from-[#0041EA] to-[#2900CD] font-[500]">
            <Link to="/services">Services</Link>
          </Button>
          <Button className={"font-[500]"}>
            <Link to="/order">Orders</Link>
          </Button>
          <TbNews
            className={
              "text-[#9CA3AF] w-[45px] h-[26.44444465637207px] border-0 rounded-none"
            }
          />
          <HiOutlineBell
            className={
              "text-[#9CA3AF] w-[45px] h-[26.44444465637207px] border-0 rounded-none"
            }
          />
          <div className="flex items-center ">
            <div
              className={
                "bg[#0030AB]/[6%] w-[46px] h-[46px] rounded-full flex items-center justify-center"
              }
            >
              <HiUserCircle className="text-[4rem] text-[#0030AB]/[6%]" />
            </div>
            <div className="flex items-center">
              <div className="text-[1rem] text-[#111827] font-[400]">
                {user?.firstName} {user?.lastName}
              </div>
              <PopOverLay content={ProfileDropDown}>
                <MdKeyboardArrowDown
                  className={
                    "flex items-center text-[#111827] font-[800] cursor-pointer"
                  }
                />
              </PopOverLay>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
