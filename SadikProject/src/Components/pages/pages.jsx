import React from "react";
import Header from "../common/header/Header";
import { Routes, Route } from "react-router-dom"; // নামড ইম্পোর্ট
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />  {/* path="/" থেকে path="*" পরিবর্তন */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
