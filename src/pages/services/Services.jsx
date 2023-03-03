import Header from "./components/Header";
import Footer from "../../global/Footer";
import Section1 from "./components/Section1";
import HeroSection from "./components/HeroSection";
import Section2 from "./components/Section2";
import Section3 from "../homepage/components/Section5";
const ServicesPage = () => {
  return (
    <div className="w-full overflow-hidden mx-auto flex flex-col items-start justify-start gap-[2rem]">
      <Header />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default ServicesPage;
