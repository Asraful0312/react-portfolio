import React from "react";

const AboutItem = ({ icon, title, years, description }) => {
  return (
    <div className="w-full md:w-6/12 flex flex-col items-center justify-center rounded-3xl p-4 border-2 border-black">
      {icon}
      <h1 className="font-semibold text-1xl text-center">{title}</h1>
      <h1 className="text-gray-700 text-sm text-center">{years}+ years</h1>
      <h1 className="text-gray-700 text-sm text-center">{description}</h1>
    </div>
  );
};

export default AboutItem;
