import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../assets/man.jpg";
import DownloadButton from "./DownloadButton";

const Hero = () => {
  return (
    <section className="container">
      <div id="#" className="h-screen flex items-center justify-center">
        <div className="flex gap-5 flex-col md:flex-row items-center md:gap-16">
          <div className="w-[300px] xl:w-[450px] xl:h-[450px] h-[300px] overflow-hidden rounded-full shadow-sm">
            <img
              src={image}
              className="object-cover w-full h-full"
              alt="user"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center text-lg">Hello, I&apos;m</h1>
            <h1 className="text-center text-4xl font-bold">Asraful Islam</h1>
            <h1 className="text-center text-2xl font-medium">
              Frontend Developer
            </h1>
            <DownloadButton download text="Download CV" text2="Contact Me" />
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Asraful0312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/asraful-islam-5152aa2a8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
