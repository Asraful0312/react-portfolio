import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_REACT_APP_API_TOKEN;


const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer" + apiKey);



const useFetch = (method, url) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true);

  const requestOptions = {
    method: method || "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false)
        setLoading(true)
        fetch(`${url}`, requestOptions)
          .then((response) => response.json())
          .then(({ data }) => {
            console.log(data);
            setResult(data)
          }); 
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return {
    result,
    loading,
    error
  };
};

export default useFetch;
