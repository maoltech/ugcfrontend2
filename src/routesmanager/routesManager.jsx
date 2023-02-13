import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/homepage/HomePage";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesManager;
