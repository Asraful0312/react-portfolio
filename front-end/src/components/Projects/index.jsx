import Heading from "../shared/Heading";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/p1.jpg";
import image2 from "../../assets/p2.jpg";
import image3 from "../../assets/p3.jpg";

const projectDetails = [
  {
    name: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt ipsa consequatur, distinctio ea eaque et illo, odio impedit dignissimos aut tenetur soluta odit sunt voluptates natus amet itaque doloremque. Doloribus porro provident perferendis, quod nisi at quis totam laboriosam, voluptatum labore enim alias tempore quos quibusdam magni, omnis aperiam aliquid! Rerum labore et quaerat excepturi beatae consectetur. Fugit sit animi natus dolore sequi optio quo culpa neque alias obcaecati accusamus doloremque aut vel, voluptate harum veniam amet itaque enim?",
    image: image1,
    projectURL: "",
  },
  {
    name: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt ipsa consequatur, distinctio ea eaque et illo, odio impedit dignissimos aut tenetur soluta odit sunt voluptates natus amet itaque doloremque. Doloribus porro provident perferendis, quod nisi at quis totam laboriosam, voluptatum labore enim alias tempore quos quibusdam magni, omnis aperiam aliquid! Rerum labore et quaerat excepturi beatae consectetur. Fugit sit animi natus dolore sequi optio quo culpa neque alias obcaecati accusamus doloremque aut vel, voluptate harum veniam amet itaque enim?",
    image: image2,
    projectURL: "",
  },
  {
    name: "Project Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt ipsa consequatur, distinctio ea eaque et illo, odio impedit dignissimos aut tenetur soluta odit sunt voluptates natus amet itaque doloremque. Doloribus porro provident perferendis, quod nisi at quis totam laboriosam, voluptatum labore enim alias tempore quos quibusdam magni, omnis aperiam aliquid! Rerum labore et quaerat excepturi beatae consectetur. Fugit sit animi natus dolore sequi optio quo culpa neque alias obcaecati accusamus doloremque aut vel, voluptate harum veniam amet itaque enim?",
    image: image3,
    projectURL: "",
  },
];

const Projects = () => {
  return (
    <section className="container pb-[150px] mt-16 w-full">
      <div id="projects" className="">
        <Heading description="Browse My Recent" title="Projects" />
        <div className="flex flex-wrap w-full items-center justify-center">
          {projectDetails.map((item) => {
            return (
              <ProjectCard
                key={item?.name}
                name={item?.name}
                description={item?.description}
                image={item?.image}
                projectURL={item?.projectURL}
                
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
