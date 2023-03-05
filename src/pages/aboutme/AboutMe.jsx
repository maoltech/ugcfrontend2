import Footer from "../../global/Footer";
import HeroSection from "./components/HeroSection";
import Section1 from "../services/components/Section1";

const AboutMe = () => {
  return (
    <div className="w-full overflow-hidden mx-auto flex flex-col items-start justify-start gap-[2rem]">
      <HeroSection />
      <Section1 />
      <Footer />
    </div>
  );
};

export default AboutMe;
