import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Home from "./pages/Home";
import ServicesAndSupport from "./pages/ServicesAndSupport";
import RakthermAcademy from "./pages/RakthermAcademy";
import RakthermWorldwide from "./pages/RakthermWorldwide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/:title" element={<AboutUs />} />
        <Route path="/solutions/:title" element={<Solutions />} />
        <Route path="/services-and-support/:title" element={<ServicesAndSupport />} />
        <Route path="/raktherm-academy" element={<RakthermAcademy />} />
        <Route path="/raktherm-worldwide/:title" element={<RakthermWorldwide />} />
      </Routes>
    </Router>
  );
}

export default App;
