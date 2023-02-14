import bg from "../../assets/registerbg.jpg";
import logo from "../../assets/logo.svg";
import Form from "./components/Form";
const Register = () => {
  return (
    <div className="grid grid-cols-2 hscreen">
      <div className="bg-gradient-to-r from-[#0041EA]/[80%] to-[#2900CD]/[80%] h-screen my-auto">
        <div className="grid grid-cols-[20%_80%] h-screen">
          <div></div>
          <div className="my-auto">
            <div
              style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "center",
              }}
              className="flex items-center justify-center py-[2rem] h-[500px] my-auto"
            >
              <div className="flex flex-col items-start justify-between gap-[1rem]">
                <img src={logo} alt="logo" />
                <span>User Generated Content </span>
                <span>
                  Empowering Creators, Connecting Communities: Your One-Stop UGC
                  Hub !
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Register;
