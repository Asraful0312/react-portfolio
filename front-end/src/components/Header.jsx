import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      to: "#about",
      text: "About",
    },
    {
      to: "#experience",
      text: "Experience",
    },
    {
      to: "#projects",
      text: "Projects",
    },
    {
      to: "#contact",
      text: "Contact",
    },
  ];

  return (
    <header className="md:flex px-10 py-3 md:items-center md:justify-between">
      <div>
        <a href="#" className="text-2xl">
          Asraful Islam
        </a>
      </div>
      <div>
        <ul
          className={`flex md:flex-row absolute md:static right-10 z-40 md:mt-0 -mt-6 flex-col items-end md:gap-5 gap-2`}
        >
          <div onClick={() => setOpen(!open)} className="text-xl md:hidden">
            {open ? <RxCross2 /> : <AiOutlineMenu />}
          </div>

          {links.map((link) => (
            <li
              key={link.text}
              className={`text-lg transition-all duration-300 md:flex  ${
                open ? "" : "hidden"
              }`}
            >
              <a
                href={link?.to}
                className={({ isActive }) =>
                  isActive ? "text-gray-500" : "text-black"
                }
              >
                {link?.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
