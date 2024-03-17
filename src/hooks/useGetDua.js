import { useState, useEffect } from 'react';

const useGetDua = () => {
  const [duas, setDuas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/duas`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setDuas(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  return { duas, isLoading, error };
};

export default useGetDua;
