import React, { useState, useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext/AuthContext";

export const useHttp = () => {
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["content-type"] = "application/json";
        }
        const response = await fetch(url, { method, body, headers });

        const data = await response.json();
        return data;
      } catch (error) {
        setError(error);
      }
    },
    []
  );

  return { request, error };
};
