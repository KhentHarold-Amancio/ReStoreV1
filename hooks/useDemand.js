import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../constants";
import axios from "axios";

export function useDemand() {
  const [isLoading, setIsLoading] = useState(false);
  const [ProdName, setProdName] = useState([]);
  const [ProdID, setProdID] = useState([]);
  const [ProdDemand, setProdDemand] = useState([]);
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
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const fetchProdID = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}predict`);
      setProdID(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const fetchProdName = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}predict`);
      setProdName(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const fetchDemand = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}predict`);
      setDemand(response.data);
    } catch (error) {
      setError(error);
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
    fetchProdName,
    ProdName,
    isLoading,
    error,
    uploadFile,
    refetch,
  };
}
