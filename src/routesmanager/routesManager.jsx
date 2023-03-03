import { Routes, Route } from "react-router-dom";
import Register from "../pages/registration/Register";
import Login from "../pages/login/Login";
import HomePage from "../pages/homepage/HomePage";
import ServicesPage from "../pages/services/Services";
import WelcomePage from "../pages/welcomepage/WelcomePage";
import ExternalLink from "../pages/externallinks/ExternalLink";
import Order from "../pages/order/Order";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signup" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="api/auth" element={<ExternalLink />} />
      <Route path="order" element={<Order />} />
    </Routes>
  );
};

export default RoutesManager;
