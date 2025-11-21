"use client";


import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";


const Discord = () => {
  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once:
         true }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col justify-center  items-center py-28 gap-6 bg-gray-100">
        <h2 className="lg:text-[34px] text-[25px] font-extrabold">Join Discord Server</h2>
        <a href="https://discord.gg/soundnesslabs" rel="noreferrer noponer" target="_blank" className="w-[200px] h-[53px] bg-[#012057] hover:bg-[#3762ad] rounded-[50px] flex justify-center items-center gap-3">
            <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 text-white"/>
            <h2 className="text-[17px] font-semibold text-white">Join now</h2>
        </a>
    </motion.main>
  )
}

export default Discord