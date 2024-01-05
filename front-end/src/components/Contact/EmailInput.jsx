import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState("example@gamil.com");
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[400px]">
        <span className="absolute inset-y-0 pl-4 left-0 flex items-center">
          <MdMail className="text-black text-lg" />
        </span>
        <div className="w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="py-4  px-5 pl-10 pr-[100px] bg-transparent outline-none w-full rounded-3xl transition duration-300 border-2 border-black"
            placeholder="Enter your email"
          />
        </div>
        <span className="absolute inset-y-0 right-0 pr-4">
          <a
            href="http://"
            className="flex items-center justify-center gap-1 mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-black text-lg" />
            <h1>Linkedin</h1>
          </a>
        </span>
      </div>
    </div>
  );
};

export default EmailInput;
