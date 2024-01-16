import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const ProjectDetails = () => {
  const { id } = useParams();
  const { result, loading, error } = useFetch(
    "GET",
    `${apiUrl}/api/projects/${Number(id)}?populate=*`
  );

  return (
    <section className="container mt-12 my-5 md:mt-20">
      <div className="w-[80%] mx-auto">
        {loading && <h1>Loading...</h1>}
        {error && <h1>There was an Error</h1>}
        <div className="flex w-full items-center justify-center">
          {result &&
          result.attributes &&
          result.attributes.video &&
          result.attributes.video.data &&
          result.attributes.video.data[0] ? (
            <ReactPlayer
              controls
              url={
                result &&
                result?.attributes?.video?.data[0]?.attributes?.url
              }
              height={"70%"}
              width={"100%"}
            ></ReactPlayer>
          ) : (
            <img
              className="w-full"
              src={
                result &&
                result?.attributes?.img?.data[0]?.attributes?.url
              }
              alt="banner"
            />
          )}
        </div>

        <div className="mt-4">
          <h1 className="text-xl font-semibold">Title:</h1>
          <p className="text-lg font-medium mb-2">
            {result && result?.attributes?.title}
          </p>

          <div className="my-3">
            <h1 className="text-xl font-semibold">Tech Used:</h1>
            <p className="">{result && result?.attributes?.tech}</p>
          </div>
          <h1 className="text-xl font-semibold">Description:</h1>
          <p className="mb-5">{result && result?.attributes?.desc}</p>
          <a
            href={result && result?.attributes?.demo}
            className="text-lg mt-5 hover:bg-black hover:text-white transition-colors duration-300 bg-transparent py-2 px-5 rounded-xl border border-black"
          >
            Check Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
