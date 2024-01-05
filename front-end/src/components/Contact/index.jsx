import Heading from "../shared/Heading";
import EmailInput from "./EmailInput";

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

const Contact = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div id="#contact" className="container ">
        <Heading description="Get In Touch" title="Contact Me" />
        <EmailInput />
        <footer className="mt-[150px] md:mt-[160px] flex flex-col gap-3 lg:mt-[160px] xl:mt-[220px]">
          <ul className={`flex items-center justify-center gap-5`}>
            {links.map((link) => (
              <li
                key={link.text}
                className={`text-lg transition-all duration-300 md:flex`}
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
          <div>
            <h1 className="text-center text-gray-500">Copyright © 2024 Asraful Islam. All Rights Reserved.</h1>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
