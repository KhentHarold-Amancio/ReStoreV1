import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../constants";
import axios from "axios";

export function useRestore() {
  const [isLoading, setIsLoading] = useState(false);
  const [grossData, setGrossData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", {
      uri: file.uri,
      type: file.mimeType,
      name: file.name,
    });
    try {
      const response = await axios.post(`${SERVER_URL}upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const fetchForecastData = async () => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${SERVER_URL}predict`,
      });
      const data = response.data;
      setForecastData(data);
    } catch (error) {
      setError(error);
    }
  };

  const fetchGrossData = async () => {
    try {
      const response = await axios.request({
        method: "GET",
        url: `${SERVER_URL}get_last_item`,
      });
      const data = response.data;

      setGrossData(data);
    } catch (error) {
      setError(error);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      fetchForecastData();
      fetchGrossData();
      console.log("Gross Data: ", data);
      console.log("Forecast Data: ", data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    setError(null);
    fetchData();
  };

  return {
    fetchData,
    grossData,
    forecastData,
    refetch,
    isLoading,
    error,
    uploadFile,
  };
}
