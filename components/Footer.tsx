"use client";



import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "assistance", label: "Assistance" },
  { id: "discord", label: "Discord" },
];


const Footer = () => {

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = `#${id}`;
  };


  return (
    <main className="w-full py-24 bg-[#012057]  flex flex-col lg:flex-row items-center justify-between lg:px-44">
      
      <div className="lg:w-[50%] w-full">
        <div className="flex flex-col gap-4 w-[100%]">
          <h2 className="text-[25px] font-bold text-white text-center lg:text-left ">Sound Assist</h2>
          <p className="lg:w-[70%] w-[90%] text-gray-200 text-[12px] lg:text-[14px] font-medium text-center lg:text-left mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae earum repellendus amet itaque dolores perspiciatis quod commodi? Illum dolorum repudiandae, autem at optio fugit dolores, minima eveniet ea, doloremque soluta.</p>
          <div className="w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center mx-auto lg:mx-0 border-gray-300">
            <a href="https://discord.gg/soundnesslabs" target="_blank" rel="noreferrer nopener">
              <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 text-[10px] text-white" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <nav>
        <ul className="flex gap-6 justify-center">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className="cursor-pointer hover:underline text-white"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </main>
  )
}

export default Footer