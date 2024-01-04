import { RiVerifiedBadgeFill } from "react-icons/ri";

export const ExperienceCard = ({lan, status}) => {
  return (
    <div className="flex items-center justify-center gap-3 w-1/2">
      <div className="w-1/2 flex gap-4">
        <div>
          <RiVerifiedBadgeFill className="text-3xl" />
        </div>
        <div>
          <h1 className="text-sm md:text-lg font-bold">{lan}</h1>
          <h1 className="text-sm md:text-sm text-gray-400">{status}</h1>
        </div>
      </div>
    </div>
  );
};
