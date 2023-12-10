import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SIZES, COLORS } from "../../../constants";
import { ActivityIndicator } from "react-native-paper";
import { useRestore } from "../../../hooks/useRestore";

const Graph = ({ selectedValue }) => {
  const { fetchSalesData, salesData, isLoading, error } = useRestore();
  const [graphData, setGraphData] = useState([]);

  const handleFetchData = () => {
    fetchSalesData();
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  useEffect(() => {
    Data();
  }, [salesData]);

  const Data = async () => {
    if(selectedValue === 'month') {
      console.log("Data", salesData['monthly_sales_data']);
      setGraphData(salesData['monthly_sales_data'].slice(-6).map(item => ({
        value: item.Sales,
        label: new Date(item.Month + '-01').toLocaleString('default', { month: 'short' }),
      })))
    } else {
       setGraphData(salesData = salesData['yearly_sales_data'].slice(-6).map(item => ({
        value: item.Sales,
        label: new Date(item.Month + '-01').toLocaleString('default', { month: 'short' }),
      })))
    }

  }
  
  const getMaxValue = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }
    console.log(data);
    const maxValue = data.reduce(
      (max, item) => (item.value > max ? item.value : max),
      data[0].value
    );
    const roundedMaxValue = Math.ceil(maxValue / 100) * 100;
    return roundedMaxValue;
  };

  // const calculateStepValue = (maxValue, maxSections = 3) => {
  //   const roundedMaxValue = Math.ceil(maxValue / 100) * 100;
  //   const stepValue = Math.ceil(roundedMaxValue / maxSections / 100) * 100;
  //   return stepValue;
  // };

  // const maxBarValue = ;
  // const stepValue = calculateStepValue(maxBarValue, 3);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={COLORS.primary} />
        </View>
      ) : (
        <BarChart
          frontColor={COLORS.primary}
          showFractionalValue
          showYAxisIndices
          noOfSections={3}
          maxValue={getMaxValue(graphData)}
          dashGap={0}
          data={graphData}
          isAnimated
          stepHeight={50}
          roundedTop
          spacing={25}
          barWidth={SIZES.cardWidth / 20}
          yAxisTextStyle={{ color: COLORS.gray3 }}
          xAxisTextStyle={{ color: COLORS.gray3 }}
          xAxisColor={COLORS.lightWhite}
          yAxisThickness={0}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "auto",
    minWidth: 300,
    justifyContent: "center",
    padding: 10,
    marginTop: -10,
    marginRight: 20,
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Graph;
