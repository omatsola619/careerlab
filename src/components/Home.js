import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import General from "./general pages/General";
import Info from "./Info";
import Js from "./js page/Js";
import Navbar from "./Navbar";
import Ss from "./ss page/Ss";
import Undergraduate from "./undergraduate/Undergraduate";

function Home() {
  return (
    <div>
      <Router>
        <Info />
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/js" element={<Js />} />
          <Route path="/ss" element={<Ss />} />
          <Route path="/graduate" element={<Undergraduate />} />
          <Route path="/general" element={<General />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Home;
