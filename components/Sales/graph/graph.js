import React, { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SIZES, COLORS } from "../../../constants";
import { useRestore } from "../../../hooks/useRestore";

const Graph = ({ selectedValue }) => {
  const { fetchSalesData, salesData } = useRestore();
  const [graphData, setGraphData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = () => {
    fetchSalesData();
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        handleFetchData();
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedValue]);

  useEffect(() => {
    getData()
  }, [salesData])


  const getData = async () => {
    if (isLoading || !salesData) return;

    const processData = (data, labelFormat) => {
      if (!data) return [];
      
      return data.slice(-6).map((item) => ({
        value: item.Sales,
        label: new Date(item.Month + "-01").toLocaleString("default", labelFormat),
        labelTextStyle: { color: COLORS.gray3 },
      }));
    };
  
    setIsLoading(true);
    try {
      let processedData;
  
      if (selectedValue === "month") {
        processedData = processData(salesData["monthly_sales_data"], { month: "short" });
      } else {
        processedData = processData(salesData["yearly_sales_data"], { year: "numeric" });
      }

      setGraphData(processedData);
      setError(null);
    } catch (error) {
      console.error("Error processing data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const getRoundedMaxValue = (data) => {
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

  const getDynamicBarWidth = () => {
    const numberOfDataPoints = graphData.length;
    const maxDataPointsToShow = 10;
    const defaultBarWidth = SIZES.cardWidth / 20;

    const minBarWidth = 5;
    const maxBarWidth = 30;

    const dynamicBarWidth = Math.min(
      maxBarWidth,
      Math.max(minBarWidth, SIZES.cardWidth / (numberOfDataPoints || maxDataPointsToShow))
    );

    return dynamicBarWidth;
  };

  return (
    <View style={styles.container}>
        <View style={styles.graphContainer}>
        <BarChart
          frontColor={COLORS.primary}
          showFractionalValue
          showYAxisIndices
          noOfSections={4}
          maxValue={getRoundedMaxValue(graphData)}
          dashGap={0}
          data={graphData}
          isAnimated
          stepHeight={50}
          roundedTop
          spacing={25}
          scrollToEnd={true}
          barWidth={getDynamicBarWidth()}
          yAxisTextStyle={{ color: COLORS.gray3 }}
          xAxisTextStyle={{ color: COLORS.gray3 }}
          xAxisColor={COLORS.lightWhite}
          yAxisThickness={0}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: SIZES.width * 0.9,
    height: 'auto',
    justifyContent: "center",
    marginHorizontal: 10,
    overflow: "hidden",
  },
  graphContainer: {
    width: SIZES.width * 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Graph;
