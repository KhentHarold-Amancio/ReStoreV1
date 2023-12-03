import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from "../../../constants";
import { SegmentedButtons } from "react-native-paper";

const GroupButton = () => {
  const [value, setValue] = React.useState("day");

  return (
    <SegmentedButtons
      value={value}
      style={styles.segmentedButtonStyle}
      onValueChange={setValue}
      buttons={[
        {
          buttonColor: COLORS.primary,
          value: 'day',
          label: 'Daily',
          labelStyle: { color: COLORS.white, fontFamily: FONT.medium, fontSize: SIZES.medium },
          style: {backgroundColor: value === 'day' ? COLORS.primary : COLORS.gray, borderColor: "transparent"}
        },
        {
          value: 'month',
          label: 'Monthly',
          labelStyle: { color: COLORS.white, fontFamily: FONT.medium, fontSize: SIZES.medium },
          style: {backgroundColor: value === 'month' ? COLORS.primary : COLORS.gray, borderColor: "transparent"}
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  segmentedButtonStyle: {
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default GroupButton;
