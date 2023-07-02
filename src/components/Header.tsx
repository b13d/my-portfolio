"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center my-2"
    >
      <Link href="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
    </motion.div>
  );
}
