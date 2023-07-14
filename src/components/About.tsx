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
        Привет! Меня зовут Данила, и я фронтенд разработчик, знаю как оживить
        неживляемое, и принести удовольствие от быстрого отклика приложения.
      </p>
      <p className="text-justify text-[#A3B3BC] text-[20px] max-sm:text-[16px]">
        Занимаюсь разработкой веб-приложений 2 года, начинал с простой верстки,
        закончил на текущий момент созданием мессенджера на базе React + NextJS
        с подключение Firebase данных
      </p>
      <p className="text-justify text-[#A3B3BC] text-[20px] max-sm:text-[16px]">
        Опыт работы у меня 6 месяцев, работал в компании TimeHouse, где начинал
        со стажера Frontend разработчика, закончил Frontend Junior
        разработчиком, ушел по причине смены направления деятельности компании
      </p>
    </motion.section>
  );
}
