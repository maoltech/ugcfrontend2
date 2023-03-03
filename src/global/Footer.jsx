import google from "../assets/googleplay.svg";
import apple from "../assets/appleplay.svg";
import { BsArrowRightShort, BsTelephone } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiYoutubeLine } from "react-icons/ri";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../assets/logowhite.svg";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#0041EA] to-[#2900CD] w-full">
      <div className="w-[90%] max-w-[1200px] text-white mx-auto py-[2rem] text-[1rem] flex flex-col items-stretch justify-start gap-[1rem]">
        <div className="flex items-center justify-between border-solid border-white border-[1.5px] rounded-[20px] py-[1rem] px-[3rem]">
          <div className="flex flex-col items-start justify-between">
            <h4 className="mb-[0.5rem]">Subscribe to UGChub</h4>
            <span>
              Get the newsletters and guides directly on your email from us{" "}
            </span>
          </div>
          <div className="relative">
            <input
              className="rounded-[4px] text-[#374151] bg-white px-[1rem] py-[10px] focus-visible:outline-[#0030AB]"
              placeholder="Your email address"
              type="email"
            />
            <BsArrowRightShort className="absolute top-[50%] right-[2%] translate-y-[-50%] text-[#0030AB]" />
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-start justify-start gap-[1rem]">
            <img src={logo} alt="img" />
            <span>Your One-Stop UGC Hub !</span>
            <div className="flex w-full items-center justify-between font-[100] text-[1.5rem]">
              <CiFacebook />
              <TiSocialLinkedinCircular />
              <TiSocialTwitterCircular />
              <IoLogoInstagram />
              <RiYoutubeLine />
            </div>
          </div>
          <div className="font-[300] flex flex-col gap-[1rem] items-start justify-start">
            <h6 className="leading-[30px] font-[500] text-[1rem]">Insights</h6>
            <div className="flex flex-col gap-[1rem] leading-[22px]">
              <span className="">For Creators</span>
              <span>For Companies</span>
              <span>FAQs</span>
              <span>Blogs</span>
            </div>
          </div>
          <div className="font-[300] flex flex-col gap-[1rem] items-start justify-start">
            <h6 className="leading-[30px] font-[500] text-[1rem]">Legals</h6>
            <div className="flex flex-col gap-[1rem] leading-[22px]">
              <span className="">Privacy Policies</span>
              <span>Terms & Conditions</span>
              <span>Help & Supports</span>
              <span>Payroll Services</span>
            </div>
          </div>
          <div className="font-[300] flex flex-col gap-[1rem] items-start justify-start">
            <h6 className="leading-[30px] font-[500] text-[1rem]">Company</h6>
            <div className="flex flex-col gap-[1rem] leading-[22px]">
              <span className="">About Us</span>
              <span>Careers</span>
              <span>Social Responsibilities</span>
              <span>Feedbacks</span>
            </div>
          </div>
          <div className="font-[300] flex flex-col gap-[2rem] items-start justify-start">
            <h6 className="leading-[30px] font-[500] text-[1rem]">
              Contact Us
            </h6>
            <div className="flex flex-col gap-[1rem] leading-[22px]">
              <span className="flex items-center">
                <GoLocation className="mr-[0.3rem]" />
                Berlin, Germany
              </span>
              <span className="flex items-center">
                <BsTelephone className="mr-[0.3rem]" />
                +1 98000 0000 0000
              </span>
              <span className="flex items-center">
                <AiOutlineMail className="mr-[0.3rem]" />
                UGChub@gmail.com
              </span>
              <span className="underline text-[0.7rem] text-center justify-self-center">
                Reach Out to Us
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-solid border-t-[3px] border-white py-[1rem]">
          <div>© 2023 UGC®. All Rights Reserved</div>
          <div className="flex items-center">
            <img
              src={google}
              alt="btn"
              className="w-[120px] h-[35px] cursor-pointer mr-[0.5rem]"
            />
            <img
              src={apple}
              alt="btn"
              className="w-[120px] h-[35px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
