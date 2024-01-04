import Heading from "../shared/Heading";
import { ExperienceCard } from "./ExperienceCard";

const frontEndExp = [
  {
    lan: "HTML",
    status: "Experinced",
  },
  {
    lan: "CSS",
    status: "Experinced",
  },
  {
    lan: "JAVASCRIPT",
    status: "Basic",
  },
  {
    lan: "React",
    status: "Intermediate",
  },
];

const backendExp = [
  {
    lan: "NODE",
    status: "Learning",
  },
  {
    lan: "MONGO DB",
    status: "Learning",
  },
  {
    lan: "STRAPI",
    status: "Basic",
  },
];

const Experience = () => {
  return (
    <section className="container">
      <div id="experience" className="h-screen md:h-full mt-16">
        <Heading description="Explore My" title="Experience" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-1/2 h-[60vh] border-2 border-black rounded-xl p-6">
            <h1 className="text-lg md:text-3xl text-bold pb-2 text-gray-600 text-center">
              Frontend Development
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:mt-5">
              {frontEndExp.map((item) => {
                return (
                  <ExperienceCard
                    key={item?.lan}
                    lan={item?.lan}
                    status={item?.status}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-1/2 h-[60vh] border-2 border-black rounded-xl p-6">
            <h1 className="text-lg md:text-3xl text-bold pb-2 text-gray-600 text-center">
              Backend Development
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:mt-5">
              {backendExp.map((item) => {
                return (
                  <ExperienceCard
                    key={item?.lan}
                    lan={item?.lan}
                    status={item?.status}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
