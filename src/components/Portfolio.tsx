"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const imagePortfolio: string[] = [
    "portfolio-1.png",
    "portfolio-2.png",
    "portfolio-3.png",
    "portfolio-4.png",
    "portfolio-5.png",
  ];

  const srcPortfolio: string[] = [
    "https://ecommerce-app-omega-seven.vercel.app/",
    "https://hacker-news-wheat.vercel.app/",
    "https://react-notes-app-weld-five.vercel.app/",
    "https://chat-app-sand-tau.vercel.app/login",
    "https://photogram-phi.vercel.app/",
  ];

  const arrDescriptions: string[] = [
    "An e-commerce website where there are products and interaction with them. The application is created for users of TS, React, NextJS, Tailwindcss",
    "A web application that works with the hacker news API offers access to applications using the API. The application is based on TS, React, NextJS, Tailwindcss and HackerNewsAPI",
    "Web application for notes. Saving takes place locally. The application is based on TS, React, NextJS, Tailwindcss",
    "LamaChat web application. Where you can correspond as in a regular messenger, you also need to register first. There are already several users in the application, for the test, you can find them by their names: danila, dima. The application is based on TS, React, NextJS, Tailwind css, Firebase (save data)",
    "A web application with a phonogram. Where you publish images, before editing it, this image will be visible to everyone who has access to the application. The application is based on TS, React, NextJS, TailwindCSS, Firebase (save data)",
  ];

  return (
    <motion.section
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      className="max-w-[1000px] max-sm:px-4 m-auto max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-5 max-[800px]:justify-center"
    >
      <h1 className="text-[50px] sm:mb-10 font-[Montserrat] max-sm:text-[40px] sm:mt-5 text-[#bb9a60] font-bold text-center">
        Portfolio
      </h1>
      {imagePortfolio.map((value, index) => {
        return (
          <motion.div
            custom={index}
            className={`max-sm:w-auto w-[400px] shadow-xl duration-1000 ${
              index % 2 === 0 ? "" : "min-[800px]:ml-auto"
            }`}
            key={index}
          >
            <Link
              target="_blank"
              className="relative"
              href={srcPortfolio[index]}
            >
              <img
                className={`w-[400px] rounded-lg `}
                src={`/images/${value}`}
                alt="screen-site"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                className="w-full h-[-webkit-fill-available] absolute rounded-lg top-0 p-[30px] flex flex-col items-center justify-center text-justify bg-[#000000ad]"
              >
                <h1 className="text-[#f7c877] max-sm:text-[12px] font-semibold">
                  {arrDescriptions[index]}
                </h1>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
