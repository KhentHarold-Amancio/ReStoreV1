import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { Avatar, ActivityIndicator } from "react-native-paper";
import { COLORS, SIZES } from "../../../constants";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9; // Adjusted to 90% of the screen width

const LineGraph = ({ forecastData, salesData, isLoading }) => {
  const [graphData, setGraphData] = useState([]);
  const [predictionData, setPredictionData] = useState([]);
  const lineData = [
    { value: 4255, label: "February", labelTextStyle: { color: COLORS.gray3 }, labelWidth: 50 },
    { value: 1234, label: "March", labelTextStyle: { color: COLORS.gray3 }, labelWidth: 50 },
    { value: 3214, label: "April", labelTextStyle: { color: COLORS.gray3 }, labelWidth: 50 },
    { value: 4000, label: "April", labelTextStyle: { color: COLORS.gray3 }, labelWidth: 50 },
  ];

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   getData();
  //   console.log("Sales Data:", salesData['monthly_sales_data'][0].Sales)
  // }, [salesData]);

  const getData = async () => {
    if (isLoading || !salesData) return;

    const processData = (data, labelFormat) => {
      if (!data) return [];

      return data.slice(-3).map((item) => ({
        value: item['Sales'],
        label: new Date(item.Month + "-01").toLocaleString(
          "default",
          labelFormat
        ),
        labelTextStyle: { color: COLORS.gray3 },
      }));
    };
    
    const processForecastData = (forecastData, labelFormat) => {
      if (!forecastData) return [];
      return [
        {
          value: forecastData.prediction,
          label: new Date(forecastData.next_month + "-01").toLocaleString("default", labelFormat),
          labelTextStyle: { color: COLORS.gray3 },
        },
      ];
    };
    try {
      let processedData;
      console.log("Gross Data:", salesData['monthly_sales_data']);
      processedData = processData(salesData['monthly_sales_data'], {
        month: "short",
      });
      let processedForecastData;
      console.log("Gross Data:", salesData['monthly_sales_data']);
      processedForecastData = processForecastData(salesData, {
        month: "short",
      });
      setGraphData(processedData);
      setPredictionData(processForecastData);
      console.log("Processed Data:", graphData);
    } catch (error) {
      console.error("Error processing data:", error);
    }
  };

  const getRoundedMaxValue = (graphData, predictionData) => {
    const combinedData = [...graphData, ...predictionData];
    console.log(predictionData)
    if (!Array.isArray(combinedData) || combinedData.length === 0) {
      return null;
    }
  
    const maxValue = combinedData.reduce(
      (max, item) => (item.value > max ? item.value : max),
      combinedData[0].value
    );
  
    const roundedMaxValue = Math.ceil(maxValue / 100) * 100;
    console.log("Max Value:", roundedMaxValue);
    return roundedMaxValue;
  };

  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color={COLORS.primary} size={"small"} />
          </View>
        ) : (
          <LineChart
            data={lineData}
            startIndex={0}
            endIndex={2}
            color1={COLORS.primary}
            data2={lineData}
            startIndex2={2}
            endIndex2={3}
            color2={COLORS.quaternary}
            stepHeight={38}
            maxValue={getRoundedMaxValue(graphData, predictionData)}
            noOfSections={4}
            initialSpacing={10}
            spacing={95}
            dataPointsColor="white"
            thickness={5}
            showVerticalLines
            verticalLinesThickness={2}
            showXAxisIndices
            verticalLinesSpacing={100}
            verticalLinesColor={COLORS.gray3}
            xAxisLength={300}
            textFontSize={SIZES.small}
            yAxisTextStyle={{ color: COLORS.gray3 }}
            xAxisTextStyle={{
              color: COLORS.gray3,
              width: 120,
              marginLeft: -60,
            }}
            yAxisThickness={1}
            yAxisColor={COLORS.white}
            xAxisColor={COLORS.white}
            dashGap={20}
            width={cardWidth}
          />
        )}
        
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <Avatar.Icon size={10} backgroundColor={COLORS.primary} />
          <Text style={styles.legendText}>Actual Sales</Text>
        </View>
        <View style={styles.legendItem}>
          <Avatar.Icon size={10} backgroundColor={COLORS.quaternary} />
          <Text style={styles.legendText}>Forecast</Text>
        </View>
      </View>
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: SIZES.width,
    height: "auto",
    justifyContent: "center",
    marginHorizontal: 50,
    alignContent: "center",
    overflow: "hidden",
  },
  graphContainer: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  legendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  legendText: {
    marginLeft: 10,
    color: COLORS.white,
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});
