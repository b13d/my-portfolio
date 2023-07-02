"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function HeaderContent() {
  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ x: -200, WebkitBorderTopLeftRadius: "6px" }}
        animate={{ x: 0,  WebkitBorderTopLeftRadius: "100px" }}
        className="bg-[#BC986A] h-[500px] rounded-tl-[100px] shadow-lg rounded-md w-[70%] p-10 items-center flex gap-20 justify-between"
      >
        <div className="flex flex-col">
          <h1 className="text-[44px] mb-5 font-[Montserrat] text-[#524217] font-semibold">
            Danila Boltach
          </h1>
          <motion.h1 className="text-[40px] tracking-tighter font-[Montserrat] leading-9 max-w-[500px] h-[150px] text-[#52421796] font-semibold">
            <Typewriter
              // options={{ loop: true }}
              options={{ cursor: "", deleteSpeed: 0.1, delay: 30 }}
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("I'm glad you came to my portfolio")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("My name is Danila and I'm Frontend developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Me 22 years old, of which I have been programming for 4 years"
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Enjoy your viewing!!");
              }}
            />
          </motion.h1>
        </div>
        <motion.img
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          className="rounded-lg relative shadow-[15px_15px_0px_0px_#6a563e] "
          src="/images/photo.png"
          width={250}
          height={250}
          alt="photo"
        />
      </motion.div>
    </section>
  );
}
