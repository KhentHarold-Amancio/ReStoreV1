import React, { useState, useEffect } from "react";
import { ENDPOINT } from "../constants";
import { useFocusEffect } from 'expo-router';

export function useRestore() {
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const [grossSales, setGrossSales] = useState([]);

  const [monthlySales, setMonthlySales] = useState([]);

  const fetchMonthlySales = async () => {
    try {
      const apiUrl = `${ENDPOINT}monthly_sales`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();

      setMonthlySales(data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchGrossSales = async () => {
    try {
      const apiUrl = `${ENDPOINT}gross_sales`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();

      setGrossSales(data)
      // console.log(data);
    } catch (error) {
      console.error("Error fetching gross sales:", error);
    }
  };

  const fetchForecastData = async () => {
    try {
      const apiUrl = `${ENDPOINT}predict`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      // Parse JSON only once
      const data = await response.json();
  
      setForecastData(data)
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };
  
  

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
    fetchForecastData();
    fetchGrossSales();
    fetchMonthlySales();
    setIsLoading(false);
  }, [])
  );
  

  return {
    monthlySales,
    grossSales,
    forecastData,
    fetchMonthlySales,
    fetchForecastData,
    fetchGrossSales,
    isLoading
  };
}
