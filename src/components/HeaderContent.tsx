"use client";

import { Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const poppins = Poppins({ weight: "600", subsets: ["devanagari"] });

export default function HeaderContent() {
  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ x: -1200, WebkitBorderTopLeftRadius: "6px" }}
        animate={{ x: 0, WebkitBorderTopLeftRadius: "100px" }}
        className=" sm:h-[500px] rounded-tl-[100px] max-sm:gap-0 max-lg:flex-col shadow-[0px_0px_4px_0px_#0000009e] rounded-md sm:w-[70%] p-10 items-center flex lg:gap-20 max-lg:justify-normal max-lg:gap-5 justify-between"
      >
        <h1
          className={`text-[44px] lg:hidden max-lg:text-[30px]   ${poppins.className} bg-gradient-to-r from-[#693fff] to-[fuchsia] bg-clip-text text-transparent font-semibold`}
        >
          Danila Boltach
        </h1>
        <div>
          <h1
            className={`text-[60px] max-lg:hidden max-lg:text-[30px] ${poppins.className}  bg-gradient-to-r from-[#693fff] to-[fuchsia] bg-clip-text text-transparent font-semibold`}
          >
            Danila Boltach
          </h1>
          <div className="flex flex-col">
            <motion.h1
              className={`text-[55px] max-sm:hidden max-lg:text-[26px]  leading-[50px] tracking-tighter ${poppins.className}  max-w-[500px] lg:h-[150px] text-[white] font-semibold`}
            >
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
        </div>
        <motion.img
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          className="rounded-lg max-lg:w-[150px] max-lg:mt-8 relative shadow-[15px_15px_0px_0px_#090c10] "
          src="/images/photo.png"
          width={250}
          height={250}
          alt="photo"
        />
      </motion.div>
    </section>
  );
}
