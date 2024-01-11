import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../constants";
import axios from "axios";

export function useDemand() {
  const [isLoadingDemand, setIsLoadingDemand] = useState(false);
  const [prodData, setProdData] = useState([]);
  const [error, setError] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", {
      uri: file.uri,
      type: file.mimeType,
      name: file.name,
    });
    try {
      const response = await axios.post(`${SERVER_URL}upload_demand`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      refetch();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const fetchProdData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}predict_demand`);
      if (response) {
        setProdData(response.data);
        setIsLoadingDemand(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoadingDemand(false);
      console.log("Data fetched successfully.");
      console.log("Fetched demand data: ", prodData);
    }
  };

  const fetchDemandData = async () => {
    setIsLoadingDemand(true);
    try {
      await fetchProdData();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoadingDemand(false);
    }
  };

  useEffect(() => {
    fetchDemandData().then(() => {
      console.log("Fetching data.");
    });
  }, []);

  const refetch = () => {
    setIsLoadingDemand(true);
    setError(null);
    fetchDemandData().then(() => {
      console.log("Refetched data");
    });
  };

  const fetchJsonData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}get_json_data`);
      if(response)
        setJsonData(response.data);
        setIsLoadingDemand(false);
        console.log("Data fetched successfully.");
    } catch (error) {
      setError(error);
      setIsLoadingDemand(false);
    } finally {
      setIsLoadingDemand(false);
    }
  };

  useEffect(() => {
    fetchJsonData();
  }, []);

  return {
    fetchProdData,
    prodData,
    isLoadingDemand,
    error,
    refetch,
    uploadFile,
    jsonData,
    fetchJsonData,
  };
}