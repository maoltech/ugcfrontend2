import { Routes, Route } from "react-router-dom";
import Register from "../pages/registration/Register";
import HomePage from "../pages/homepage/HomePage";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default RoutesManager;
