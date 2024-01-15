import { FaGithub, FaLinkedin } from "react-icons/fa";
import DownloadButton from "./DownloadButton";
import useFetch from "../../hooks/useFetch";
import { Fragment } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const Hero = () => {
  const { result, loading, error } = useFetch(
    "GET",
    `${apiUrl}/api/admin-details?populate=*`
  );

  return (
    <section className="container  py-[80px]  md:py-[150px]">
      <div id="#" className=" flex items-center justify-center">
        <div className="flex gap-5 flex-col md:flex-row items-center md:gap-10">
          {loading && <h1>Loading...</h1>}
          {error && <h1>There was an error</h1>}
          {!loading &&
            !error &&
            result &&
            result?.map((item) => (
              <Fragment key={item.id}>
                <div className="w-[300px] xl:w-[450px] xl:h-[450px] h-[300px] overflow-hidden rounded-full shadow-sm">
                  <img
                    src={
                      item &&
                      apiUrl + item?.attributes?.img?.data?.attributes?.url
                    }
                    className="object-cover w-full h-full"
                    alt="user"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-center text-lg">Hello, I&apos;m</h1>
                  <h1 className="text-center text-4xl font-bold">
                    {item && item?.attributes?.name}
                  </h1>
                  <h1 className="text-center text-2xl font-medium">
                    {item && item?.attributes?.role}
                  </h1>
                  <DownloadButton
                    download
                    text="Download CV"
                    text2="Contact Me"
                  />
                  <div className="flex items-center gap-2">
                    <a
                      href={
                        item &&
                        item?.attributes?.links?.data[0]?.attributes?.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href={
                        item &&
                        item?.attributes?.links?.data[1]?.attributes?.url
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
