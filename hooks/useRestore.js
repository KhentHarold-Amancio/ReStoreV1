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
}
