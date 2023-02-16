import Header from "./components/Header";
import Footer from "../../global/Footer";
import HeroSection from "./components/HeroSection";
const ServicesPage = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-start justify-start gap-[2rem]">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
