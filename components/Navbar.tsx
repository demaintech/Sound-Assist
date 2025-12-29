"use client";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "assistance", label: "Assistance" },
  { id: "discord", label: "Discord" },
];

const Navbar = () => {
  return (
    <nav className="w-auto h-auto ">
      <ul className="flex items-center gap-6 font-medium text-[19px]">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(s.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  // fallback to change hash if element not found
                  window.location.hash = `#${s.id}`;
                }
              }}
              className="cursor-pointer hover:underline"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
