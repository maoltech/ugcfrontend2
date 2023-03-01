import Header from "../services/components/Header";
import Footer from "../../global/Footer";
import HeroSection from "./components/HeroSection";
import EmptyOrder from "./components/EmptyOrder";

const Order = () => {
  return (
    <div className="w-full min-h-screen mx-auto flex flex-col items-start justify-start gap-[1rem]">
      <Header />
      <HeroSection />
      <EmptyOrder />
      <Footer />
    </div>
  );
};

export default Order;
