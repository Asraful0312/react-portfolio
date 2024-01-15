import { useState } from "react";
import Heading from "../shared/Heading";
import { TextAreaComponent } from "./Textarea";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiKey = import.meta.env.VITE_REACT_APP_API_TOKEN;

const links = [
  {
    to: "",
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

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        url: `${apiUrl}/api/contacts`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        data: {
          data: userData,
        },
      };
      const response = await axios.request(options);
      console.log("Contact form submitted:", response.data);
      toast.success('Contact Message Sent!');
    } catch (error) {
      console.error("Error submitting contact form:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }

      // Handle error
    }
  };

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
          <ul className={`flex flex-wrap items-center justify-center gap-3`}>
            {links.map((link) => (
              <li
                key={link.text}
                className={`text-xl md:text-lg lg:text-xl hover:underline hover:text-gray-500 transition-all duration-300 md:flex}`}
              >
                {link.text === "Home" ? (
                  !(location.pathname === "/") ? (
                    <Link to="/">Home</Link>
                  ) : (
                    <a href="#">{link?.text}</a>
                  )
                ) : (
                  <a href={link.to}>{link?.text}</a>
                )}
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
