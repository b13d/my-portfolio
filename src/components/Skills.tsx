"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
    "java-script.png",
    "typescript.png",
    "git.png",
    "github.png",
    "atom.png",
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
      <h1 className="text-[50px] font-[Montserrat] mt-5 text-[#bb9a60] max-sm:text-[40px] font-bold text-center">
        Technical Skills
      </h1>
      <ul className="flex justify-center my-5 gap-5 flex-wrap">
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
                className="max-sm:w-[75px] w-[100px]"
                alt="logo"
              />
              <motion.p
                custom={index}
                variants={variants}
                initial={{ opacity: 0 }}
                whileInView="visibile"
                viewport={{ once: true }}
                className="font-semibold text-[18px]"
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
