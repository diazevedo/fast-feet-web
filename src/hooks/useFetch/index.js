import React, { useState, useEffect } from 'react';

import api from '~/services/api';

const useFetch = ({ url, options = {}, callback = null }) => {
  console.log('useFetch');
  console.log(options);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await api.get(url, { params: options });
        let { data } = res;

        if (callback) {
          data = callback(res.data);
        }
        console.log(data);
        setResponse(data);
      } catch (err) {
        // setError(() => {
        //   throw new Error(JSON.stringify(err.response.status));
        // });
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, options, callback]);
  // }, [url, callback]);

  return [response, error, isLoading];
};

export default useFetch;
