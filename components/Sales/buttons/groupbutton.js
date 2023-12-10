import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from "../../../constants";
import { SegmentedButtons } from "react-native-paper";

const GroupButton = ({ selectedValue, handleValueChange }) => {

  return (
    <SegmentedButtons
      value={selectedValue}
      style={styles.segmentedButtonStyle}
      onValueChange={(value) => handleValueChange(value)}
      buttons={[
        {
          buttonColor: COLORS.primary,
          value: 'month',
          label: 'Monthly',
          labelStyle: { color: COLORS.white, fontFamily: FONT.medium, fontSize: SIZES.medium },
          style: {backgroundColor: selectedValue === 'month' ? COLORS.primary : COLORS.gray, borderColor: "transparent"}
        },
        {
          value: 'year',
          label: 'Yearly',
          labelStyle: { color: COLORS.white, fontFamily: FONT.medium, fontSize: SIZES.medium },
          style: {backgroundColor: selectedValue === 'year' ? COLORS.primary : COLORS.gray, borderColor: "transparent"}
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
