import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Avatar, Button, Card, Text, ActivityIndicator } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/SaleSummary.style";
import { useRestore } from "../../../hooks/useRestore";

const SaleSummaryCard = ({ onPress }) => {
  const { fetchSalesData, salesData, isLoading } = useRestore();
  const [salesComparison, setSalesComparison] = useState(null);

  const calculateSalesComparison = () => {
    try {
      if (!salesData || salesData['yearly_sales_data'].length < 2) {
        setSalesComparison(null);
        return;
      }
      const yearlyData = salesData['yearly_sales_data'];
      const currentSales = yearlyData[yearlyData.length - 1].Sales;
      const previousSales = yearlyData[yearlyData.length - 2].Sales;
      const salesDifference = (currentSales - previousSales).toFixed(2);
      setSalesComparison({
        currentSales,
        previousSales,
        salesDifference,
      });
    } catch (error) {
      // console.error("Error calculating sales comparison:", error);
    }
  };

  const fetchData = async () => {
    try {
      await fetchSalesData();
    } catch (error) {
      // Handle error if needed
    }
  };

  const handleReload = () => {
    fetchData();
  };

  const renderSalesContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="small" color={COLORS.primary} />;
    } else if (salesData && salesComparison) {
      return (
        <>
          <Text style={[styles.textStyle, { marginTop: 5, marginBottom: 10, fontFamily: FONT.medium, fontSize: SIZES.xxLarge }]}>
            ${salesComparison.currentSales.toFixed(2)}
          </Text>
          <Text style={[styles.textStyle, { fontFamily: FONT.regular, fontSize: SIZES.small }]}>
            Units Sold: {salesComparison.unitsSold} (MoM: {salesComparison.salesDifference > 0 ? "+" : ""}{salesComparison.salesDifference})
          </Text>
        </>
      );
    } else {
      return <Text style={[styles.textStyle, { fontFamily: FONT.regular, fontSize: SIZES.small }]}>No forecast data available</Text>;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculateSalesComparison();
    console.log("Sales Data:", salesData);
  }, [salesData]);

  return (
    <TouchableOpacity onPress={() => handleReload()}>
      <Card style={styles.container}>
        <Card.Content contentStyle={styles.container}>
          <Text style={[styles.textStyle, { fontFamily: FONT.bold, fontSize: SIZES.medium }]}>
            Year-to-Date Sales
          </Text>
          {renderSalesContent()}
        </Card.Content>
        <Image
          source={require("../../../assets/images/sales/sales-card-image.png")}
          style={styles.image}
        />
      </Card>
    </TouchableOpacity>
  );
};

export default SaleSummaryCard;
