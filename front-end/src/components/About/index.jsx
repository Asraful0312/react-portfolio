import { GiAchievement } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import Heading from "../shared/Heading";
import AboutItem from "./AboutItem";
import useFetch from "../../hooks/useFetch";
import { Fragment } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;


const About = () => {
  const { result, loading, error } = useFetch(
    "GET",
    `${apiUrl}/api/admin-details?populate=*`
  );

  return (
    <section className="container pb-[80px] md:pb-[150px]">
      <div id="about" className="mt-16 md:w-[90%] md:mx-auto md:mt-0">
        <Heading description="Get To Know More" title="About Me" />
        <div className="flex flex-col md:flex-row items-center gap-10">
          {loading && <h1>Loading...</h1>}
          {error && <h1>There was an error</h1>}
          {!loading &&
            !error &&
            result &&
            result.map((item) => (
              <Fragment key={item && item?.id}>
                <div className="w-[300px] md:w-1/3  h-[330px]">
                  <img
                    className="w-full rounded-2xl h-full bg-center object-cover"
                    src={
                      item &&
                      item?.attributes?.img2?.data?.attributes?.url
                    }
                    alt="man"
                  />
                </div>
                <div className="w-[90%] md:w-8/12">
                  <div className="flex flex-col items-center gap-5 md:flex-row">
                    <AboutItem
                      icon={<GiAchievement className="text-2xl" />}
                      title={"Exparience"}
                      years={
                        item &&
                        item?.attributes?.exps?.data[0].attributes?.duration
                      }
                      description={
                        item && item?.attributes?.exps?.data[0].attributes?.role
                      }
                    />
                    <AboutItem
                      icon={<IoPeople className="text-2xl" />}
                      title={"Education"}
                      edu={
                        item &&
                        item?.attributes?.edus?.data[0].attributes?.duration
                      }
                      description={
                        item && item?.attributes?.edus?.data[0].attributes?.name
                      }
                    />
                  </div>
                  <h1 className="pt-3 pb-1 text-semibold">Description:</h1>
                  <p className="text-sm text-gray-500">
                    {item && item?.attributes?.dsec}
                  </p>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
