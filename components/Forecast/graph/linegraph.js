import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import React from 'react';
import { COLORS, SIZES } from '../../../constants';
import { Avatar } from 'react-native-paper';

const { width } = Dimensions.get("window");
const cardWidth = width * 0.7; // Set to 70% of the screen width

const LineGraph = () => {
  const lineData = [
    { value: 15, label: "February", labelTextStyle: { color: COLORS.gray3 }, labelWidth: 50 },
    { value: 30, label: "March", labelTextStyle: { color: COLORS.gray3 }, labelWidth: 50 },
    { value: 26, label: "April", labelTextStyle: { color: COLORS.gray3 }, labelWidth: 50 },
  ];

  const getMaxValue = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }
    const maxValue = data.reduce(
      (max, item) => {
        return item.value > max ? item.value : max;
      },
      data[0].value
    );

    return maxValue;
  };

  const maxData = getMaxValue(lineData);

  return (
    <View style={styles.container}>
      <LineChart
        data={lineData}
        startIndex={0}
        endIndex={2}
        color1={COLORS.primary}
        data2={lineData}
        startIndex2={1}
        endIndex2={2}
        color2={COLORS.quaternary}
        stepHeight={38}
        maxValue={maxData}
        noOfSections={5}
        initialSpacing={50}
        spacing={100}
        dataPointsColor='white'
        thickness={5}
        showVerticalLines
        verticalLinesThickness={2}
        showXAxisIndices
        verticalLinesSpacing={100}
        verticalLinesColor={COLORS.gray3}
        xAxisLength={300}
        textFontSize={SIZES.small}
        yAxisTextStyle={{ color: COLORS.gray3 }}
        xAxisTextStyle={{ color: COLORS.gray3, width: 120, marginLeft: -60 }} // Adjust width as needed
        yAxisThickness={1}
        yAxisColor={COLORS.white}
        xAxisColor={COLORS.white}
        dashGap={20}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
        <Avatar.Icon
          size={10}
          marginLeft={-100}
          backgroundColor={COLORS.primary}
        />
        <Text style={{ marginLeft: 10, color: COLORS.white }}>Actual Sales</Text>
        <Avatar.Icon
          size={10}
          marginLeft={30}
          backgroundColor={COLORS.quaternary}
        />
        <Text style={{ marginLeft: 10, color: COLORS.white }}>Forecast</Text>
      </View>
    </View>
  );
};

export default LineGraph;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    alignContent: 'center',
    marginLeft: 5,
    marginTop: 10,
  },
});
