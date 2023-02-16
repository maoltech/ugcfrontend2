import bg from "../../assets/welcomebg.svg";
import brush from "../../assets/brush.svg";
import Button from "../../global/Button";
const WelcomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="w-[60%] p-[2rem] gap-[1rem] m-auto bg-[#F8FAFC] rounded-[12px] flex flex-col items-start justify-start">
        <div className="bg-[#0030AB]/[80%] rounded-[12px] p-[2rem] w-full m-auto flex flex-col items-start justify-between font-[400] text-[1rem] text-white gap-[2rem] relative">
          <span>
            Our platform is designed to empower you to share your unique content
            with a wider audience and connect with like-minded individuals.
            Whether you're a blogger, vlogger, photographer, or any other type
            of content creator, our UGC Hub is the perfect place for you to
            showcase your work and grow your following.
          </span>
          <span>
            We can't wait to see the amazing content you'll create and share
            with the community. Happy creating!
          </span>
          <img
            src={brush}
            alt="clipart"
            className="absolute right-[-3%] bottom-[-20%]"
          />
        </div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0041EA] to-[#2900CD] font-[600] leading-[120%] flex flex-col items-start justify-start gap-[1rem]">
          <h3>Welcome to the UGC Hub!</h3>
          <span>
            We are excited to have you on board as a member of our <br />{" "}
            community of creators.
          </span>
        </div>
        <Button className={"bg-[#0030AB] text-white self-end"}>
          Check It Out
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
