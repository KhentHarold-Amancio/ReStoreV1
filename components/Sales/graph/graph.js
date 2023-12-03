import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { SIZES, COLORS } from "../../../constants";

const Graph = () => {
  const barData = [
    { value: 230, label: "M", labelTextStyle: { color: COLORS.gray3 } },
    { value: 180, label: "T", labelTextStyle: { color: COLORS.gray3 } },
    { value: 195, label: "W", labelTextStyle: { color: COLORS.gray3 } },
    { value: 250, label: "Th", labelTextStyle: { color: COLORS.gray3 } },
    { value: 320, label: "F", labelTextStyle: { color: COLORS.gray3 } },
    { value: 420, label: "S", labelTextStyle: { color: COLORS.gray3 } },
  ];

  const getMaxValue = (data) => {
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

  const calculateStepValue = (maxValue, maxSections = 3) => {
    const roundedMaxValue = Math.ceil(maxValue / 100) * 100;
    const stepValue = Math.ceil(roundedMaxValue / maxSections / 100) * 100;
    return stepValue;
  };

  const maxBarValue = getMaxValue(barData);
  const stepValue = calculateStepValue(maxBarValue, 3);

  return (
    <View style={styles.container}>
      <BarChart
        showFractionalValue
        showYAxisIndices
        noOfSections={3}
        maxValue={maxBarValue}
        dashGap={0}
        data={barData}
        isAnimated
        stepHeight={50}
        roundedTop
        frontColor={COLORS.primary}
        spacing={25}
        barWidth={SIZES.cardWidth / 20}
        yAxisTextStyle={{ color: COLORS.gray3 }}
        xAxisTextStyle={{ color: COLORS.gray3 }}
        xAxisColor={COLORS.lightWhite}
        yAxisThickness={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "auto",
    justifyContent: "center",
    padding: 10,
    marginTop: -10,
    marginRight: 20,
  },
});

export default Graph;
