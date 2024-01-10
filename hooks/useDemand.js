import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../constants";
import axios from "axios";

export function useDemand() {
  const [isLoadingDemand, setIsLoadingDemand] = useState(false);
  const [prodData, setProdData] = useState([]);
  const [error, setError] = useState(null);
  const [jsonData, setJsonData] = useState(null);

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
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  let data;

  const fetchProdData = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}predict_demand`);
      setProdData(response.data);
      data = response.data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoadingDemand(true);
      console.log("API Response:",data);
      console.log("Data fetched successfully.")
      console.log("Fetched demand data: ", prodData)
    }
  };

  const fetchJsonData = async () => {
    try {
      setIsLoadingDemand(true); // Set loading state to true while fetching data
      const response = await axios.get(`${SERVER_URL}get_json_data`); // Ensure URL is correct
      setJsonData(response.data); // Update the jsonData state with the fetched data
      setIsLoadingDemand(false); // Set loading state to false after fetching data
    } catch (error) {
      setError(error); // Set error state if an error occurs
      setIsLoadingDemand(false); // Set loading state to false if an error occurs
    }
  };

  // useEffect hook to fetch JSON data when the component mounts
  useEffect(() => {
    fetchJsonData();
  }, []);


  const refetch = () => {
    fetchProdData().then(() => {
      console.log("Refetched data");
    });
    setIsLoadingDemand(true);
    setError(null);
  };

  return {
    fetchProdData,
    prodData,
    isLoadingDemand,
    error,
    refetch,
    jsonData,
    fetchJsonData,
  };
}