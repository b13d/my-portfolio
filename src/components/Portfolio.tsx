"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "800", subsets: ["devanagari"] });

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

  // const arrDescriptions: string[] = [
  //   "An e-commerce website where there are products and interaction with them. The application is created for users of TS, React, NextJS, Tailwindcss",
  //   "A web application that works with the hacker news API offers access to applications using the API. The application is based on TS, React, NextJS, Tailwindcss and HackerNewsAPI",
  //   "Web application for notes. Saving takes place locally. The application is based on TS, React, NextJS, Tailwindcss",
  //   "LamaChat web application. Where you can correspond as in a regular messenger, you also need to register first. There are already several users in the application, for the test, you can find them by their names: danila, dima. The application is based on TS, React, NextJS, Tailwind css, Firebase (save data)",
  //   "A web application with a phonogram. Where you publish images, before editing it, this image will be visible to everyone who has access to the application. The application is based on TS, React, NextJS, TailwindCSS, Firebase (save data)",
  // ];
  const arrDescriptions: string[] = [
    "Веб-сайт электронной коммерции, на котором представлены товары и взаимодействие с ними. В приложении используются следующие технологии: TS, React, NextJS, Tailwindcss, Framer-motion",
    "Веб-приложение, работающее с HackerNewsAPI, предлагает доступ к приложениям, использующим этот API. В приложении используются следующие технологии: TS, React, NextJS, Tailwindcss and HackerNewsAPI, Framer-motion",
    "Веб-приложение для заметок. Сохранение происходит локально. В приложении используются следующие технологии: TS, React, NextJS, Tailwindcss, Framer-motion",
    "Веб-приложение Lama Chat. Там, где вы можете переписываться, как в обычном мессенджере, вам также необходимо сначала зарегистрироваться. В приложении уже есть несколько пользователей, для теста вы можете найти их по именам: danila, dima. В приложении используются следующие технологии: TS, React, NextJS, Tailwind css, Firebase (save data), Framer-motion",
    "Веб-приложение photogram. Там, где вы публикуете изображения, перед этим отредактировав изображение, данное изображение будет видно всем, у кого есть доступ к приложению. В приложении используются следующие технологии: TS, React, NextJS, TailwindCSS, Firebase (save data), Framer-motion",
  ];

  return (
    <motion.section
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      className="max-w-[1000px] max-[800px]:px-4 m-auto max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-5 max-[800px]:justify-center"
    >
      <h1
        className={`text-[50px] min-[800px]:mb-10  max-[800px]:text-[40px] min-[800px]:mt-5 bg-gradient-to-r to-[#267ee2] from:60% to:50% from-[#d400ff] ${poppins.className} bg-clip-text text-transparent font-bold text-center`}
      >
        Portfolio
      </h1>
      {imagePortfolio.map((value, index) => {
        return (
          <motion.div
            custom={index}
            className={`max-[800px]:w-auto w-[400px]  duration-1000 ${
              index % 2 === 0 ? "" : "min-[800px]:ml-auto"
            }`}
            key={index}
          >
            <Link
              target="_blank"
              className="relative"
              href={srcPortfolio[index]}
            >
              <motion.img
                initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`w-[400px] rounded-lg brightness-90 shadow-xl`}
                src={`/images/${value}`}
                alt="screen-site"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                className="w-full min-[800px]:hidden h-[-webkit-fill-available] absolute rounded-lg top-0 p-[30px] flex  flex-col items-center justify-center text-justify bg-[#000000ad]"
              >
                <h1 className="text-[#A3B3BC] max-[800px]:text-[14px] font-semibold">
                  {arrDescriptions[index]}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 800 : -800 }}
                whileInView={{ opacity: 1, x: index % 2 === 0 ? 400 : -400 }}
                // viewport={{ once: true }}
                transition={{ type: "tween", duration: 1 }}
                className="w-full max-[800px]:hidden h-[-webkit-fill-available] absolute rounded-lg top-0 p-[30px] flex  flex-col items-center justify-center text-justify"
              >
                <h1 className="text-[#A3B3BC] max-[800px]:text-[12px] font-semibold">
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
