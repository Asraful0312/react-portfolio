import { PopoverComponent } from "./PopoverComponent";
const ProjectCard = ({ image, description, name }) => {
  return (
    <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[30%] xl:w-[30%] px-4 mb-4">
      <div className="bg-transparent border-2 border-black p-4 rounded-2xl">
        <div className="flex items-center justify-center flex-col">
          <div className="w-full h-[210px] rounded-2xl">
            <img
              className="rounded-xl w-full h-full object-cover bg-center"
              src={image}
              alt="projectImg"
            />
          </div>
          <h1 className="font-semibold text-gray-500 mt-2">{name}</h1>
          <div className="flex items-center gap-5 mt-3">
            <a
              href="https://github.com/Asraful0312"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent py-1 px-3 rounded-xl border-2 border-black">
                Github
              </button>
            </a>
            <PopoverComponent description={description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
