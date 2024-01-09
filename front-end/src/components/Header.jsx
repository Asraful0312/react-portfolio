import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      to: "/",
      text: "Home",
    },
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
    <section className="fixed w-full md:w-full header right-0 left-0 top-0">
      <header className="md:w-[80%] 2xl:w-[55%] xl:w-[70%] md:mx-auto md:flex px-10 py-3 md:items-center md:justify-between">
        <div className="flex items-center  sm:justify-between justify-end">
          <div className="hidden sm:block">
            <Link to="/" className="text-lg md:text-lg lg:text-2xl">
              ASRAFUL
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className="text-xl md:hidden">
            {open ? <RxCross2 /> : <AiOutlineMenu />}
          </div>
        </div>
        <div>
          <ul
            className={`flex nav bg-white h-screen md:h-0 md:flex-row w-full absolute md:static right-0 z-[9999] md:mt-0 flex-col items-center md:flex md:gap-5 gap-8 ${
              open ? "" : "hidden"
            }`}
          >
            {links.map((link) => (
              <li
                onClick={() => setOpen(false)}
                key={link.text}
                className={`text-xl md:text-lg lg:text-xl hover:underline hover:text-gray-500 transition-all duration-300 md:flex}`}
              >
                {link.text === "Home" ? (
                  <Link to="/">Home</Link>
                ) : (
                  <a
                    href={link?.to}
                    className={({ isActive }) =>
                      isActive ? "text-gray-500" : "text-black"
                    }
                  >
                    {link?.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Header;
