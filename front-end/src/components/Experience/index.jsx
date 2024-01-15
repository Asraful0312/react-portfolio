import Heading from "../shared/Heading";
import useFetch from "../../hooks/useFetch";
import { Fragment } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const Experience = () => {
  const { result, loading, error } = useFetch(
    "GET",
    `${apiUrl}/api/skill-categories?populate=*`
  );

  return (
    <section className="container pb-[80px] md:pb-[150px] w-full">
      <div id="experience" className="w-full md:w-[90%] md:mx-auto mt-16">
        <Heading description="Explore My" title="Skills & Experiences" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {loading && <h1>Loading...</h1>}
          {error && <h1>There was an error</h1>}
          {!loading &&
            !error &&
            result &&
            result.map((item) => (
              <Fragment key={item && item?.id}>
                <div className="w-[90%] mx-auto md:w-1/2 border border-black rounded-2xl p-6">
                  <h1 className="text-lg md:text-3xl text-bold pb-2 text-gray-600 text-center">
                    {item && item?.attributes?.name}
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-center gap-4 md:mt-5">
                    {item?.attributes?.languges?.data.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center justify-center gap-3 w-full md:w-1/2"
                      >
                        <div className="w-1/2 flex gap-4">
                          <div>
                            <RiVerifiedBadgeFill className="text-3xl" />
                          </div>
                          <div>
                            <h1 className="text-sm md:text-lg font-bold">
                              {data.attributes.name}
                            </h1>
                            <h1 className="text-sm md:text-sm text-gray-400">
                              {data.attributes.label}
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
