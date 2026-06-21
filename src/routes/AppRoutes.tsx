import { Routes, Route } from "react-router-dom";


import Login from "../pages/Login";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Community from "../pages/Community";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;