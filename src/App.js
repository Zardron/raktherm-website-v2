import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AGlance from "./pages/AGlance";
import CorporateStrategy from "./pages/CorporateStrategy";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-glance" element={<AGlance />} />
        <Route path="/corporate-strategy" element={<CorporateStrategy />} />
      </Routes>
    </Router>
  );
}

export default App;
