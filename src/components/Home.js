import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import Info from "./Info";
import Js from "./js page/Js";
import Navbar from "./Navbar";
import Ss from "./ss page/Ss";
import Undergraduate from "./undergraduate/Undergraduate";
import Commerce from "../components/frames/Commerce";
import Engineering from "../components/frames/Engineering";
import Humanities from "../components/frames/Humanities";
import IdealCareer from "../components/frames/IdealCareer";
import Skill from "../components/frames/Skill";
import Stream from "../components/frames/Stream";
import Teachers from "../components/frames/Teachers";
import Professional from "../components/frames/Professional";
import ErrorPage from "./ErrorPage";
import ScrollToTop from "./ScrollToTop";
import Modal from "./Modal";

function Home() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Info />
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/js" element={<Js />} />
          <Route path="/ss" element={<Ss />} />
          <Route path="/graduate" element={<Undergraduate />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/humanities" element={<Humanities />} />
          <Route path="/idealCareer" element={<IdealCareer />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Home;
