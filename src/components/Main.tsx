import React from "react";
import About from "./About";
import HeaderContent from "./HeaderContent";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Header from "./Header";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <>
      <div className="w-full max-w-[1280px]">
        <Header />
        <HeaderContent />
        <About />
        <Skills />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
}
