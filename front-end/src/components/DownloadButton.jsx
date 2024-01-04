import cv from "../assets/cv.pdf";
const CV_URL = `http://localhost:5173/${cv}`;
import { Link } from "react-router-dom";

const DownloadButton = ({ download, text, text2 }) => {
  const handleDownload = (url) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = url; // Adjust the path accordingly
    downloadLink.setAttribute("download", "cv"); // Specify the desired file name
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex items-center gap-2">
      {download ? (
        <button
          className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent p-2 rounded-lg border-2 border-black"
          onClick={() => handleDownload(CV_URL)}
        >
          {text}
        </button>
      ) : (
        <button className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent p-2 rounded-lg border-2 border-black">
          {text}
        </button>
      )}
      <Link to="/contact">
        <button className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent p-2 rounded-lg border-2 border-black">
          {text2}
        </button>
      </Link>
    </div>
  );
};

export default DownloadButton;
