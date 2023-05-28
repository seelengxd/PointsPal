import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type ApiHookOptions = AxiosRequestConfig;

export type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

const useApi = <T,>(url: string, options: ApiHookOptions = {}): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const fullUrl = process.env.REACT_APP_API_URL + url;

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<T> = await axios(fullUrl, options);
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        // eslint-disable-line
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useApi;
