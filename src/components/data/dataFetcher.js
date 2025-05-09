import { useEffect } from 'react';

const DataFetcher = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://eat-what-api.niku-aws.com/api/v1/getAll');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setData]);

  return null; // This component does not render anything
};

export default DataFetcher;