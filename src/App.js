import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Home from "./pages/Home";
import ServicesAndSupport from "./pages/ServicesAndSupport";
import RakthermAcademy from "./pages/RakthermAcademy";
import RakthermWorldwide from "./pages/RakthermWorldwide";
import Contacts from "./pages/Contacts";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import PlumberCommunity from "./pages/PlumberCommunity";
import PlumberPanel from "./component/PlumberCommunity/PlumberPanel";
import Dashboard from "./pages/Dashboard";
import AccountVerification from "./pages/AccountVerification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/:title" element={<AboutUs />} />
        <Route path="/solutions/:title" element={<Solutions />} />
        <Route
          path="/services-and-support/:title"
          element={<ServicesAndSupport />}
        />
        <Route path="/raktherm-academy" element={<RakthermAcademy />} />
        <Route
          path="/raktherm-worldwide/:title"
          element={<RakthermWorldwide />}
        />
        <Route path="/contacts/:title" element={<Contacts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blogs/" element={<Blog />} />
        <Route path="/blog-detail/:title" element={<BlogDetails />} />
        <Route path="/plumber-community" element={<PlumberCommunity />} />
        <Route path="/plumber-community/:title" element={<PlumberPanel />} />
        <Route path="/dashboard/:title" element={<Dashboard />} />
        <Route
          path={`/account-verification/:email`}
          element={<AccountVerification />}
        />
      </Routes>
    </Router>
  );
}

export default App;
