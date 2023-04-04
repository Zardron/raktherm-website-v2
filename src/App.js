import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/:title" element={<AboutUs />} />
        <Route path="/solutions/:title" element={<Solutions />} />
      </Routes>
    </Router>
  );
}

export default App;
