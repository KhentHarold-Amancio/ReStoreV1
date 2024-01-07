import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Avatar, Button, Card, Text, ActivityIndicator } from "react-native-paper";
import { COLORS, FONT, SIZES } from "../../../constants";
import styles from "./styles/SaleSummary.style";
import { useRestore } from "../../../hooks/useRestore";

const SaleSummaryCard = ({ onPress }) => {
  const { fetchSalesData, salesData, isLoading } = useRestore();
  const [salesComparison, setSalesComparison] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await fetchSalesData();
      await calculateSalesComparison()
      
    } catch (error) {
      
    }
  };

  const calculateSalesComparison = () => {
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
  };

  const handleReload = () => {
    fetchData();
  };

  useEffect(() => {
    handleReload();
  }, [salesData])

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.container}>
        <Card.Content contentStyle={styles.container}>
          <Text style={[styles.textStyle, { fontFamily: FONT.bold, fontSize: SIZES.medium }]}>
            Year-to-Date Sales
          </Text>
          {!isLoading ? (
            salesComparison ? (
              <>
                <Text style={[styles.textStyle, { marginTop: 5, marginBottom: 10, fontFamily: FONT.medium, fontSize: SIZES.xxLarge }]}>
                  ${salesComparison.currentSales.toFixed(2)}
                </Text>
                <Text style={[styles.textStyle, { fontFamily: FONT.regular, fontSize: SIZES.small }]}>
                  Units Sold: {salesComparison.unitsSold} (MoM: {salesComparison.salesDifference > 0 ? "+" : ""}{salesComparison.salesDifference})
                </Text>
              </>
            ) : (
              <ActivityIndicator size="small" color={COLORS.primary} />
            )
          ) : (
            <ActivityIndicator size="small" color={COLORS.primary} />
          )}
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
