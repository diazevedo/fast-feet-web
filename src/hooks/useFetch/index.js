import { useState, useEffect } from 'react';

import api from '~/services/api';

const useFetch = ({ url = '' }) => {
  console.log(url);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setResponse(null);
    const fetchData = async () => {
      try {
        const res = await api.get(url);

        setResponse(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return () => setResponse([]);
  }, [url]);

  return [response];
};

export default useFetch;
