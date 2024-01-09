import { Fragment } from "react";
import { projectData } from "../Projects/index";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <section className="container mt-12 my-5 md:mt-20">
      <div className="w-[80%] mx-auto">
        {projectData.map((item) => {
          return (
            item?.id === Number(id) && (
              <Fragment key={item?.name}>
                <div className="flex w-full items-center justify-center">
                  {item?.vid ? (
                    <ReactPlayer height={'70%'} width={"100%"} controls url={item?.vid} />
                  ) : (
                    <img className="w-full" src={item?.image && item?.image} alt="banner" />
                  )}
                </div>

                <div className="mt-4">
                  <h1 className="text-xl font-semibold">Title:</h1>
                  <p className="text-lg font-medium mb-2">{item?.name}</p>

                  <div className="my-3">
                    <h1 className="text-xl font-semibold">Tech Used:</h1>
                    <p className="">{item?.tech.join(", ")}</p>
                  </div>
                  <h1 className="text-xl font-semibold">Description:</h1>
                  <p>{item?.description}</p>
                  <button className="text-lg mt-5 hover:bg-black hover:text-white transition-colors duration-300 bg-transparent py-2 px-5 rounded-xl border border-black">
                    Check Demo
                  </button>
                </div>
              </Fragment>
            )
          );
        })}
      </div>
    </section>
  );
};

export default ProjectDetails;
