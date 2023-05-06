import { useState, useCallback } from "react";

const URL = "http://127.0.0.1:3028";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(URL + requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {
          "Content-Type": "application/json",
        },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
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
      return { error: true };
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
