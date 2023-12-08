import React, { useState, useEffect } from "react";
import { ENDPOINT } from "../constants";
import { useFocusEffect } from "expo-router";

export function useRestore() {
  const [isLoading, setIsLoading] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const [grossSales, setGrossSales] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);

  
  return {};
}
