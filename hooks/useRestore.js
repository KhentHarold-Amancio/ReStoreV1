import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../constants";
import axios from "axios";

export function useRestore() {
  const [isLoading, setIsLoading] = useState(false);
  const [grossData, setGrossData] = useState([]);
  const [salesPerformanceData, setSalesPerformanceData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [lineGraphData, setLineGraphData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  
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
      refetch();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const fetchForecastData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${SERVER_URL}predict`);
      if (response) {
        setForecastData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSalesData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${SERVER_URL}get_sales_data`);
      if (response) {
        setSalesData(response.data);
        setIsLoading(false);
      }
      
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSalesPerformanceData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${SERVER_URL}sales_performance_history`);

      setSalesPerformanceData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchGrossData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${SERVER_URL}get_last_item`);
      setGrossData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLineGraphData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${SERVER_URL}line_graph_data`);
      setLineGraphData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      await fetchForecastData();
      await fetchGrossData();
      await fetchSalesData();
      await fetchSalesPerformanceData();
      await fetchLineGraphData();
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
    grossData,
    forecastData,
    salesPerformanceData,
    salesData,
    lineGraphData,
    isLoading,
    error,
    fetchData,
    uploadFile,
    fetchSalesPerformanceData,
    fetchForecastData,
    fetchSalesData,
    fetchLineGraphData,
    refetch,
  };
}
