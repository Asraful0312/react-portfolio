import { Title } from "./Title";
import image from "../assets/man2.jpg";
import { GiAchievement } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { Description } from "./Description";


export const About = () => {
  return (
    <div className="mt-16 md:mt-0 min-h-[70vh]">
      <Title msg="Get To Know More" title="About Me" />
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
            <div className="w-full md:w-6/12 flex flex-col items-center justify-center rounded-3xl p-4 border-2 border-black">
              <GiAchievement className="text-2xl" />
              <h1 className="font-semibold text-1xl text-center">Experience</h1>
              <h1 className="text-gray-700 text-sm text-center">2+ years</h1>
              <h1 className="text-gray-700 text-sm text-center">
                Frontend Development
              </h1>
            </div>
            <div className="w-full md:w-6/12 flex flex-col items-center justify-center rounded-3xl p-4 border-2 border-black">
              <IoPeople className="text-2xl" />
              <h1 className="font-semibold text-1xl text-center">Education</h1>
              <h1 className="text-gray-700 text-sm text-center">H.S.C</h1>
              <h1 className="text-gray-700 text-sm text-center">
                Higher Secondary School Certificate
              </h1>
            </div>
          </div>
          <Description />
        </div>
      </div>
    </div>
  );
};
