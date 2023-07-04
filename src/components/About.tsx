"use client";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "800", subsets: ["devanagari"] });
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      whileInView={{ y: 0 }}
      initial={{ y: 300 }}
      viewport={{ once: true }}
      className="flex flex-col gap-3 sm:gap-10 max-w-[600px] m-auto max-sm:px-4"
    >
      <h1
        className={`text-[50px] bg-gradient-to-r from-[#267ee2] from:60% to:40% to-[#a82efa] ${poppins.className} bg-clip-text text-transparent max-lg:text-[40px] max-sm:mt-[12px]  sm:mt-5  font-bold text-center`}
      >
        About me
      </h1>
      <p className="text-justify text-[#A3B3BC] text-[20px] max-sm:text-[16px]">
        Hello everyone My name is Danila, and I am a frontend developer, I know
        how to revive the unlived
      </p>
      <p className="text-justify text-[#A3B3BC] text-[20px] max-sm:text-[16px]">
        In college, I studied information systems and programming, where I first
        got acquainted with the programming language PHP, C#, and JS. Even then
        I was fired up with the idea of doing something in these languages, and
        I thought that college would help me in this, but I was wrong, only
        after graduation I decided for myself that I would connect my life with
        programming, and after scrolling through the Internet, I decided that I
        would a frontend developer
      </p>
      <p className="text-justify text-[#A3B3BC] text-[20px] max-sm:text-[16px]">
        After 1 year of service, I started learning the JS language, it was hard
        at first, but I understood that it was natural, and I continued to
        study, and I already saw the first results in a week, which I was very
        happy about, and it cheered me up
      </p>
      <p className="text-justify text-[#A3B3BC] text-[20px] max-sm:text-[16px]">
        I like that there is always something to strive for in the field of
        programming, that it is always possible to do better, and that personal
        progress in programming and awareness of important little things is
        visible
      </p>
    </motion.section>
  );
}
