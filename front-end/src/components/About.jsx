import { Title } from "./Title"
import image from '../assets/man2.jpg'
export const About = () => {
  return (
    <div className="mt-16 md:mt-0">
      <Title msg="Get To Know More" title="About Me" />
      <div className="flex items-center gap-10">
        <div className="w-1/4">
          <img className="w-full object-cover" src={image} alt="man" />
        </div>
      </div>
    </div>
  );
}
