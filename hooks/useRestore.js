<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useFocusEffect } from "expo-router";
import React from "react";

export function useRestore() {
  const [isLoading, setIsLoading] = useState(true);
  const [grossSales, setGrossSales] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const firestore = getFirestore();
        const sales_data = collection(firestore, "sales_data");
        const forecast_data = collection(firestore, "sales_data");
        const monthly_sales = collection(firestore, "sales_data");

        try {
          const gross = await getDocs(sales_data);

          const jsonData = [];

          // Process the documents in the collection
          gross.forEach((doc) => {
            console.log("Document ID: ", doc.id);
            console.log("Document Data: ", doc.data());

            // Convert each document's data to JSON format
            const jsonDoc = {
              id: doc.id,
              ...doc.data(),
            };

            // Add the JSON-formatted data to the array
            jsonData.push(jsonDoc);
          });

          setGrossSales(jsonData);
        } catch (error) {
          console.error("Error fetching data: ", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, [])
  );

  return { isLoading, grossSales };
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4
}
