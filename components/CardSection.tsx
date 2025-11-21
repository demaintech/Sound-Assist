"use client";

import { motion } from "framer-motion";



const cards = [
    {
        icon: "$",
        title: "First Title",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque asperiores",
    },

    {
        icon: "$",
        title: "First Title",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque asperiores",
    },

    {
        icon: "$",
        title: "First Title",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque asperiores",
    },
];

const CardSection = () => {
  return (
    
    <main className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 pb-20 mt-24">
        {cards.map((card, index) =>{ 
            return <motion.div 
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        key={index}
                        className="lg:w-[420px] w-[85%] h-[270px]  bg-white drop-shadow-xl flex gap-2 flex-col justify-center rounded-xl p-8"
                    >
                        <div className="text-[30px] text-black">
                            {card.icon}
                        </div>

                        <div>
                            <h1 className="lg:text-[30px] text-[20px] font-semibold">{card.title}</h1>
                        </div>

                        <div>
                            <p className="w-[85%] text-[15px] lg:text-[18px] text-gray-700">{card.description}</p>
                        </div>
                    </motion.div>

        })}
    </main>
  )
}

export default CardSection