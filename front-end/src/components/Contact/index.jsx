import { useState } from "react";
import Heading from "../shared/Heading";
import { TextAreaComponent } from "./Textarea";

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
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello");
  }

  console.log(userData);

  return (
    <section className="flex items-center pb-11 justify-center">
      <div id="contact" className="container ">
        <Heading description="Get In Touch" title="Contact Me" />
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center flex-col gap-3">
            <input
              onChange={handlChange}
              className="outline-none border w-10/12 border-black rounded-md py-3 px-4"
              placeholder="Enter your name..."
              name="name"
              type="text"
            />
            <input
              onChange={handlChange}
              className="outline-none border w-10/12 border-black rounded-md py-3 px-4"
              placeholder="Enter your email..."
              name="email"
              type="email"
            />

            <TextAreaComponent onChange={handlChange} />
          </div>
          <div className="flex items-center justify-start w-[83%] mx-auto mt-5">
            <input
              type="submit"
              className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent py-2 px-5 rounded-lg border border-black"
              value="Send"
            />
          </div>
        </form>
        <footer className="w-[80%] mx-auto mt-[80px] md:mt-[100px] flex flex-col gap-3 lg:mt-[120px] xl:mt-[160px]">
          <ul
            className={`flex flex-wrap items-center justify-center gap-3`}
          >
            {links.map((link) => (
              <li key={link.to}>
                <a
                  className="text-lg md:text-xl hover:underline hover:text-gray-500 transition-all duration-300"
                  href={`${link?.to}`}
                >
                  {link?.text}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <h1 className="text-center text-gray-500">
              Copyright © 2024 Asraful Islam. All Rights Reserved.
            </h1>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
