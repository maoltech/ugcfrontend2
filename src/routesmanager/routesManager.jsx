import { Routes, Route } from "react-router-dom";
import Register from "../pages/registration/Register";
import Login from "../pages/login/Login";
import HomePage from "../pages/homepage/HomePage";
import ServicesPage from "../pages/services/Services";
import WelcomePage from "../pages/welcomepage/WelcomePage";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signup" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="services" element={<ServicesPage />} />
    </Routes>
  );
};

export default RoutesManager;
