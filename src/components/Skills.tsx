"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "800", subsets: ["devanagari"] });

export default function Skills() {
  const namesSkills: string[] = [
    "HTML",
    "CSS3",
    "SASS",
    "Javascript",
    "Typescript",
    "Git",
    "Github",
    "React",
    "NextJS",
  ];

  const imageSkills: string[] = [
    "html.png",
    "css-3.png",
    "sass.png",
    "javascript.png",
    "typescript.png",
    "git.png",
    "github.png",
    "react.png",
    "Nextjs-logo.png",
  ];

  const variants = {
    visibile: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <motion.section
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="max-w-[1000px] m-auto max-sm:px-4"
    >
      <h1
        className={`text-[50px]  mt-5 bg-gradient-to-r to-[#267ee2] from:60% to:40% from-[#7c2efa] ${poppins.className} bg-clip-text text-transparent max-sm:text-[40px] font-bold text-center`}
      >
        Technical Skills
      </h1>
      <ul className="flex justify-center my-5 gap-5 flex-wrap items-baseline">
        {namesSkills.map((value, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center flex-col gap-5"
            >
              <motion.img
                custom={index}
                variants={variants}
                initial={{ opacity: 0 }}
                whileInView="visibile"
                viewport={{ once: true }}
                src={`/images/${imageSkills[index]}`}
                className={`max-sm:w-[75px] w-[100px]`}
                alt="logo"
              />
              <motion.p
                custom={index}
                variants={variants}
                initial={{ opacity: 0 }}
                whileInView="visibile"
                viewport={{ once: true }}
                className="font-semibold text-[18px] text-[#A3B3BC]"
              >
                {namesSkills[index]}
              </motion.p>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
}
