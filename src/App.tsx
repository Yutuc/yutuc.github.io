import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./templates/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Careers from "./pages/Careers";

function App() {
  // const [focus, setFocus] = useState(0);
  // const location = useLocation();

  // React.useEffect(() => {
  //   if (location.pathname == "/") {
  //     setFocus(0);
  //   } else if (location.pathname == "/about") {
  //     setFocus(1);
  //   } else if (location.pathname == "/contact") {
  //     setFocus(2);
  //   } else if (location.pathname == "/services") {
  //     setFocus(3);
  //   } else if (location.pathname == "/careers") {
  //     setFocus(4);
  //   }
  // }, [location]);

  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
