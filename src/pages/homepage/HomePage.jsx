import Header from "./components/Header";
import Footer from "../../global/Footer";
import HeroSection from "./components/HeroSection";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
const HomePage = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-start justify-start gap-[2rem]">
      <Header />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default HomePage;
