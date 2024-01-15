import Heading from "../shared/Heading";
import ProjectCard from "./ProjectCard";
import useFetch from "../../hooks/useFetch";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const Projects = () => {
  const { result, loading, error } = useFetch("GET", `${apiUrl}/api/projects?populate=*`);


  return (
    <section className="container pb-[150px] mt-16 w-full">
      <div id="projects" className="">
        <Heading description="Browse My Recent" title="Projects" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {!loading &&
            !error &&
            result &&
            result.map((item) => (
              <ProjectCard
                key={item && item?.id}
                name={item && item?.attributes?.title}
                image={
                  item &&
                  apiUrl + item?.attributes?.img?.data[0]?.attributes?.url
                }
                link={item && item?.attributes?.github}
                id={item && item?.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
