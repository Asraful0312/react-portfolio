const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const DownloadButton = ({ download, text, text2 }) => {
  const CV_URL = `${apiUrl}/uploads/cv_1_M5_D98_MJ_9607ff0352.pdf`;
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
          className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent p-2 rounded-lg border border-black"
          onClick={() => handleDownload(CV_URL)}
        >
          {text}
        </button>
      ) : (
        <button className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent p-2 rounded-lg border border-black">
          {text}
        </button>
      )}
      <a href="#contact">
        <button className="text-sm hover:bg-black hover:text-white transition-colors duration-300 bg-transparent p-2 rounded-lg border border-black">
          {text2}
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
