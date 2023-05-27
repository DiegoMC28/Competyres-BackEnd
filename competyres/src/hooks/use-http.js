import { useState, useCallback } from "react";

const URL = "http://127.0.0.1:3028";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      let headers = { "Content-Type": "application/json" };
      if (requestConfig.headers) {
        headers = {
          "Content-Type": "application/json",
          ...requestConfig.headers,
        };
      }
      const body = requestConfig.body
        ? JSON.stringify(requestConfig.body)
        : null;
      const response = await fetch(URL + requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setIsLoading(false);
      return { error: true, message: err.message };
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
