"use client";

import {
  faHeadset,
  faMotorcycle,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <FontAwesomeIcon icon={faMotorcycle} />,
    title: "Instant Support",
    description:
      "Access a wide range of frequently asked questions with clear solutions.",
  },

  {
    icon: <FontAwesomeIcon icon={faHeadset} />,
    title: "24/7 Assistance",
    description:
      "Whether day or night, you have answers to your questions right away.",
  },

  {
    icon: <FontAwesomeIcon icon={faPencil} />,
    title: "Simplified Support",
    description: "Simple guide, quick fixes and helpful tips anyone can follow",
  },
];

const CardSection = () => {
  return (
    <main className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 py-20 mt-24 bg-[#032d77]">
      {cards.map((card, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            key={index}
            className="lg:w-[420px] w-[85%] h-[270px]  bg-white drop-shadow-xl flex gap-2 flex-col justify-center rounded-xl p-8"
          >
            <div className="text-[30px] text-black">{card.icon}</div>

            <div>
              <h1 className="lg:text-[30px] text-[20px] font-semibold">
                {card.title}
              </h1>
            </div>

            <div>
              <p className="w-[85%] text-[15px] lg:text-[18px] text-gray-700">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </main>
  );
};

export default CardSection;
