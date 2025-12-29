"use client";

import React from "react";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faPlus,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Getting the onboarded role on discord",
    answer: {
      steps: {
        1: "Create a post and creative contents about soundness on X. Let it be of high quality based on real facts about Soundness this increases your chance. Also don't forget to tag Soundness on your posts.",
      },
    },
  },

  {
    id: 2,
    question: "Creating public key",
    answer:
      "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease.",
  },

  {
    id: 3,
    question: "Playing the knight tour game",
    answer:
      "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease.",
  },

  {
    id: 4,
    question: "Updating CLI",
    answer:
      "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease.",
  },

  {
    id: 5,
    question: "Importing an existing public key",
    answer:
      "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease.",
  },

  {
    id: 6,
    question: "New on Soundeness? Read Sound docs",
    answer:
      "SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease. SoundAssist is an AI-powered tool designed to help musicians and producers create high-quality soundtracks with ease.",
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
        className="w-full flex justify-center items-center"
      >
        <h2 className="lg:text-[40px] text-[25px] font-extrabold">
          Quick Guide
        </h2>
      </motion.div>

      {/* FAq  Dropdown */}
      <div className="w-full flex justify-center items-center flex-col py-20 lg:gap-10 gap-6">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              key={index}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="lg:w-[85%] w-[90%] lg:h-[100px] h-20 rounded-[50px]  bg-[#032d77]  flex flex-row justify-between px-6 lg:px-12 items-center z-30">
                <div className="flex items-center lg:gap-4 gap-2">
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="w-6 h-6 text-gray-200"
                  />
                  <h2 className="text-gray-300 lg:text-[20px] text-[14px] font-medium">
                    {item.question}
                  </h2>
                </div>

                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <FontAwesomeIcon
                      icon={isOpen ? faAngleUp : faPlus}
                      className="w-8 h-8 text-gray-200 cursor-pointer"
                    />
                  </button>
                </div>
              </div>

              {/* Answer Section */}
              <div
                className={`lg:w-[85%] w-[90%] min-h-[200px] py-10 bg-[#032d77]  -mt-12 p-10 pt-16 ${
                  isOpen ? "block" : "hidden"
                } rounded-2xl z-20 mb-10 `}
              >
                {item.id === 1 && (
                  <div className="w-[100%] pl-4 flex flex-col">
                    <div>
                      <h1 className="text-white text-[20px] font-medium">
                        This can be done in 4 steps:
                      </h1>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col w-[100%] bg-gray-300 p-6 mt-6 rounded-lg">
                      {/* Step 1 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 1</h1>
                        <h2 className="text-[26px] font-semibold">
                          Creating post
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Create a post and creative contents about soundness
                            on X. Let it be of high quality based on real facts
                            about Soundness this increases your chance. Also
                            don&apos;t forget to tag Soundness on your posts.
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 2</h1>
                        <h2 className="text-[26px] font-semibold">
                          Submitting X links
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                           All post links are to be submitted on the contend channel. There, it is required you tag the mods. Your contents will be picked based on quality and 
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 3</h1>
                        <h2 className="text-[26px] font-semibold">
                          Announcement of onboarded members
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            The onboarded members are announced on the <span className="font-semibold"> mini announcement</span> channel on the Discord server. There you would be asked to send a dm to the mod and also submit your publick key and a proof showing your are among the onboarded members and an invite code would be sent to you.
                          </p>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">With that you can proceed to step 4</p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 4</h1>
                        <h2 className="text-[26px] font-semibold">
                          Onboarded role
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Getting the onboarded role is automatic by the bot after adding the invite code and your public key by using the command <span className="font-semibold">/redeem</span>
                          </p>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">Congratulations, you are successfully onboarded</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === 2 && (
                  <div className="w-[100%] pl-4 flex flex-col">
                    <div>
                      <h1 className="text-white text-[20px] font-medium">
                        Creating a public key can be done in 4 simple steps:
                      </h1>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col w-[100%] bg-gray-300 p-6 mt-6 rounded-lg">
                      {/* Step 1 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 1</h1>
                        <h2 className="text-[26px] font-semibold">
                          Create a new repository on GitHub
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Click on new
                          </p>

                          {/* Image Here.... */}

                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Choose repository name; Finally create repository
                          </p>

                          {/* Image Here..... */}
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 2</h1>
                        <h2 className="text-[26px] font-semibold">
                          Create a codespace
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Click on new codespace
                          </p>

                          {/* Image Here ..... */}

                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Select repository (The newly created repo)
                          </p>

                          {/* Image Here */}
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 3</h1>
                        <h2 className="text-[26px] font-semibold">
                          Installing Soundness and other dependencies
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Here you run terminal command line by line
                          </p>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Copy command, paste in your terminal and click enter
                          </p>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            At the end of this you should see a success message
                            like this
                          </p>

                          {/* Image Here .... */}
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <h1 className="text-[20px] font-medium mt-1">Step 4</h1>
                        <h2 className="text-[26px] font-semibold">
                          Generating a new{" "}
                        </h2>
                        <div>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Copy the command, paste in the terminal and click
                            enter
                          </p>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            After this you should see a new publick key
                            generated for you.
                          </p>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Don&apos;t forget to save your passphrase in a save
                            place
                          </p>
                          <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                            Having problem generating key? Get help on soundness
                            support channel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === 3 && (
                  <div className="w-[100%] pl-4 flex flex-col">
                    <div className="flex flex-col w-[100%] bg-gray-300 p-6 mt-6 rounded-lg">
                      {/* Step 1 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                          The Knight tour game is a classic chess puzzle, where
                          the ultimate goal is to move a knght around the chess
                          board so that it visits every square exactly once.
                        </p>
                        <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                          There are already made solutions made by extra
                          ordinary Soundies. <br /> Visit the
                          knight_tour_solver.
                        </p>
                        <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                          Trace each square on the silver website and compare it
                          to the square on the knigth tour game to play the
                          game.{" "}
                        </p>
                        <p className="text-gray-700 text-[20px] font-semibold mt-6 w-[90%]">
                          Success on your journey!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === 4 && (
                  <div className="w-[100%] pl-4 flex flex-col">
                    <div className="flex flex-col w-[100%] bg-gray-300 p-6 mt-6 rounded-lg">
                      {/* Step 1 */}
                      <div className="py-8">
                        <div className="w-[30px] h-[6px] bg-[#032d77] rounded-xl"></div>
                        <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                          Updating the cli involve installing the dependencies
                          that was installed when creating the cli, you will
                          need these command
                        </p>
                        <p className="text-gray-700 text-[17px] mt-6 w-[90%]">
                          Run these commands line by line
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default FAQ;
