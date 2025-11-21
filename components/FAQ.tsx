"use client";



import React from "react";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "Getting the onboarded role on discord",
        answer: "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease."
    },

    {
        question: "Creating public key",
        answer: "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease."
    },

    {
        question: "Playing the knight tour game",
        answer: "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease."
    },

    {
        question: "Updating CLI",
        answer: "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease."
    },

     {
        question: "Importing an existing public key",
        answer: "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease."
    },

    {
        question: "New on Soundeness? Read Sound docs",
        answer: "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease."
    },
];




const FAQ = () => {

    // use index-based open state so each FAQ can open/close independently
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <main className="py-20">
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }} 
            className="w-full flex justify-center items-center">
            <h2 className="lg:text-[40px] text-[25px] font-extrabold">Quick Guide</h2>
        </motion.div>

        {/* FAq  Dropdown */}
        <div className="w-full flex justify-center items-center flex-col py-20 lg:gap-10 gap-6">
            {faqs.map((item, index) =>{
                const isOpen = openIndex === index;
                return <motion.div 
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            key={index} 
                            className="w-full flex flex-col justify-center items-center">
                
                <div  className="lg:w-[85%] w-[90%] lg:h-[100px] h-20 rounded-[50px]  bg-[#032d77] flex flex-row justify-between px-6 lg:px-12 items-center z-30">
                    <div className="flex items-center lg:gap-4 gap-2">
                        <FontAwesomeIcon icon={faMessage} className="w-6 h-6 text-gray-200" />
                        <h2 className="text-gray-300 lg:text-[20px] text-[14px] font-medium">{item.question}</h2>
                    </div>

                    <div>
                        <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen}>
                            <FontAwesomeIcon icon={isOpen ? faAngleUp : faPlus} className="w-8 h-8 text-gray-200 cursor-pointer" />
                        </button>
                    </div>
                </div>

                {/* Answer Section */}
                <div className={`lg:w-[85%] w-[90%] min-h-[200px] py-10 bg-black -mt-12 p-10 pt-16 ${isOpen ? "block" : "hidden" } rounded-2xl z-20 mb-10 `}>
                    <p className="text-[16px] font-medium text-gray-100 w-[80%] leading-loose">{item.answer}</p>
                </div>

                </motion.div>
            })}
        </div>
    </main>
  )
}

export default FAQ