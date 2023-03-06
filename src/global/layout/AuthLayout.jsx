import logo from "../../assets/logo.svg";
import { ToastContainer } from "react-toastify";
const AuthLayout = ({ bgimg, children }) => {
  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-2 bg-[#F8FAFC]  min-h-screen">
        <div className="bg-gradient-to-r from-[#0041EA]/[80%] to-[#2900CD]/[80%] min-h-screen overflow-hidden">
          <div className="grid grid-cols-[20%_80%] justify-items-end content-between min-h-screen">
            <div></div>
            <div className="my-auto grid grid-cols-1 h-screen w-full bg-transparent">
              <div
                style={{
                  backgroundImage: `url(${bgimg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="flex items-center justify-end py-[2rem] w-full h-[80%] m-auto overflow-hidden rounded-tl-[40px] rounded-bl-[40px]"
              >
                <div className="flex flex-col items-start justify-center w-[80%] m-auto gap-[1rem]">
                  <img src={logo} alt="logo" />
                  <span className="text-[#111827] leading-[100%] text-[3rem] font-[600]">
                    User Generated Content{" "}
                  </span>
                  <span className="text-[#374151] leading-[150%] font-[400] text-[0.8rem]">
                    Empowering Creators, Connecting Communities: Your One-Stop
                    UGC Hub !
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] m-auto">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
