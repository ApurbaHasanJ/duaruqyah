import { useState, useEffect } from 'react';

const useGetSubCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3001/sub-category`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
          // console.log(data);
        setSubCategories(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  return { subCategories, isLoading, error };
};

export default useGetSubCategories;
