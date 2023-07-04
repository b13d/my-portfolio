import Image from "next/image";
import { motion } from "framer-motion";
import Main from "@/components/Main";

export default function Home() {
  const variants = {};

  return (
    <main className="flex bg-gradient-to-b from-[#0d1117] to-[#232e3f] min-h-screen flex-col items-center justify-between">


      <Main />
    </main>
  );
}
