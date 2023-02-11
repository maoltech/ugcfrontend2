import HeroBg from "../../../assets/herobg.svg";
import HeroImg from "../../../assets/homeimg.svg";
const HeroSection = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${HeroBg})` }} className="flex">
        <h2>
          Get user-generated content at a crazy-affordable price. We're a dream
          for marketers and agencies.
        </h2>
        <img src={HeroImg} alt="img" />
      </div>
    </div>
  );
};

export default HeroSection;
