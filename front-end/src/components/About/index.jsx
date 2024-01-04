import { GiAchievement } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import image from "../../assets/man2.jpg";
import Heading from "../shared/Heading";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <section className="container">
      <div id="about" className="mt-16 md:mt-0 min-h-[70vh]">
        <Heading description="Get To Know More" title="About Me" />
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-[300px] md:w-1/3  h-[330px]">
            <img
              className="w-full rounded-2xl h-full bg-center object-cover"
              src={image}
              alt="man"
            />
          </div>
          <div className="w-8/12">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <AboutItem
                icon={<GiAchievement className="text-2xl" />}
                title={"Experience"}
                years={2}
                description={"Frontend Development"}
              />
              <AboutItem
                icon={<IoPeople className="text-2xl" />}
                title={"Education"}
                years={2}
                description={"Higher Secondary School Certificate"}
              />
            </div>
            <h1 className="pt-3 pb-1 text-semibold">Description:</h1>
            <p className="text-sm text-gray-500">
              I&rsquo;m a frontend web developer with a solid grasp of
              JavaScript and hands-on experience with various frontend
              frameworks and libraries. Currently delving into backend
              development, I aim to broaden my skill set and create more
              comprehensive web solutions. Beyond coding, I'm an avid gamer,
              transforming my free time into thrilling virtual adventures.
              Whether conquering challenges or immersing myself in captivating
              narratives, gaming is both a passion and a source of inspiration.
              In addition, I unwind by watching movies across genres,
              appreciating diverse storytelling. This multifaceted blend of
              technical proficiency, gaming enthusiasm, and cinematic
              appreciation defines my approach to both work and leisure,
              creating a dynamic balance in my professional and personal
              pursuits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
