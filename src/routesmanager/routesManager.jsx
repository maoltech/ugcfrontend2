import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homepage/HomePage";
import ServicesPage from "../pages/services/Services";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default RoutesManager;
