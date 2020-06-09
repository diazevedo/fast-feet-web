import React, { useState, useEffect } from 'react';

import api from '~/services/api';

const useFetch = ({
  url = '',
  options = {},
  callback = null,
  from = 'itself',
}) => {
  // console.log(url);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(`from   ${from}`);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(false);

      console.log('RAN USEFETCH');

      try {
        const res = await api.get(url, { params: options });
        let { data } = res;

        if (callback) {
          data = callback(res.data);
        }
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

    return () => setResponse([]);
  }, [url, options, callback]);
  // }, [url, callback]);

  return [response, error, isLoading];
};

export default useFetch;
