"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";




const Hero = () => {
  return (
    <main className='w-full h-screen flex lg:flex-row flex-col justify-between items-center lg:px-24 pt-12 lg:pt-0'>

    {/* Hero Text */}
      <div className="lg:w-[45%] w-full -mt-3">
        {/* <div className="w-[200px] h-[47px] bg-gray-300 rounded-[50px] flex justify-center items-center">
          <h3 className="text-white text-[17px] font-medium">Demo Text</h3>
        </div> */}

        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          // viewport={{ root: scrollRef }}
          className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-3">
          <h1 className="lg:text-[80px] text-[35px] leading-tight font-extrabold text-center lg:text-start">Welcome to <br /> <span className="text-[#032d77]">Sound Assist</span></h1>
          <p className="lg:text-[18px] text-[15px] font-medium text-gray-600 lg:w-[90%] w-[90%] mt-4 text-center lg:text-left mx-auto lg:mx-0 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia praesentium doloribus deserunt, a corrupti culpa, deleniti id ad necessitatibus quidem iusto aut eius pariatur quisquam labore est aliquid maxime vitae!</p>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-start items-center lg:items-start gap-4 mt-12  ">
          <button className="lg:w-[250px] w-[150px] lg:h-[55px] h-[46px] bg-[#012057] hover:bg-[#3762ad] cursor-pointer transition-opacity  lg:text-[20px] text-[14px] text-white rounded-[50px] font-semibold ">Seek Assistance</button>
          <button className="lg:w-[160px] w-[150px] lg:h-[55px] h-[46px] flex gap-2 justify-center items-center bg-[#3762ad] hover:bg-[#012057] cursor-pointer transition-opacity lg:text-[20px] text-[14px] text-white rounded-[50px] font-semibold ">
            <FontAwesomeIcon icon={faDiscord} className="w-6 h-6 text-white" />
            Discord
          </button>
          {/* <button className="w-40 h-[50px] bg-black text-[16px] text-white rounded-[50px] font-semibold ">Contact us</button> */}
        </motion.div>
      </div>


    {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className=" -mt-3">
        <Image src="/assets/support2.avif" width={600} height={600} alt="Hero Image" />
      </motion.div>
    </main>
  )
}

export default Hero
