import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { Avatar, ActivityIndicator } from "react-native-paper";
import { COLORS, SIZES } from "../../../constants";
import { useRestore } from "../../../hooks/useRestore";
import { styles } from "./linegraph.style";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

const LineGraph = () => {
  const [graphData, setGraphData] = useState([]);
  const { fetchLineGraphData, lineGraphData } = useRestore();
  const [isLoading, setIsLoading] = useState(false);
  const [maxValue, setMaxValue] = useState(10000);
  const [error, setError] = useState(null);

  const handleFetchData = () => {
    fetchLineGraphData();
    console.log("Line Graph Data:", lineGraphData);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setMaxValue(lineGraphData["max_value"]);
        handleFetchData();
        getData();
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    getData();
  }, [lineGraphData]);

  const getData = async () => {
    if (isLoading || !lineGraphData) {
      return;
    }

    const processData = (data) => {
      if (!data) return [];

      return data.map((item) => ({
        value: item.Sales,
        label: new Date(item.Month).toLocaleString("en-US", {
          month: 'short',
        }),
        labelTextStyle: { color: COLORS.gray3 },
      }));
    };

    setIsLoading(true);
    try {
      setGraphData(processData(lineGraphData["line_graph_data"]));
      console.log(
        "Processed Data:",
        processData(lineGraphData["line_graph_data"])
      );
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

    const maxValue = data.reduce(
      (max, item) => (item.value > max ? item.value : max),
      data[0].value
    );
    const roundedMaxValue = Math.ceil(maxValue / 100) * 100;
    return roundedMaxValue;
  };

  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
      <LineChart
            data={graphData}
            startIndex={0}
            endIndex={2}
            color1={COLORS.primary}
            data2={graphData}
            startIndex2={2}
            endIndex2={3}
            color2={COLORS.quaternary}
            stepHeight={38}
            maxValue={graphData.length > 0 ? getRoundedMaxValue(graphData) : 10000}
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
            // rotateLabel
          />
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
