import { useState, useEffect } from 'react';
import api from '~/services/api';

const useFetch = ({ url = '', options = {}, callback = null }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResponse([]);
    setError(false);
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await api.get(url, { params: options });

        let { data } = res;

        if (callback) {
          data = callback(data);
        }

        setResponse(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, callback]);

  return [response, error, loading];
};

export default useFetch;
