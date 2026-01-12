import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import Home from "./Home";
import About from "./About";
import Service from "./Services";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;