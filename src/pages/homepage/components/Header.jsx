import Logo from "../../../assets/logo.svg";
import Button from "../../../global/Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full bg-[#F8FAFC] shadow-[0px 2px 6px] shadow-[#0000]/[6%]">
      <div className="grid grid-cols-[60%_40%] w-[80%] max-w-[1200px] mx-auto py-[0.2rem] content-center text-[1rem] font-[400] leading-[27px] text-[#111827]">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            className="w-[100px] h-[60px] justify-self-start"
          />
          <Button className={"bg-[#0030AB] text-white"}>Post Content</Button>
          <Button>
            <Link to="/services">Browse Services</Link>
          </Button>
          <Button>How it Works</Button>
        </div>
        <div className="flex items-center justify-end">
          <Button>
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button>
            <Link to="/login">Log In</Link>
          </Button>
          <Button className={"bg-[#0030AB]/[6%] text-[#0030AB]"}>
            Become a seller
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
