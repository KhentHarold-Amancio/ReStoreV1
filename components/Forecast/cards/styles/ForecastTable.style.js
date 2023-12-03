import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";


const styles = StyleSheet.create({
    container: {
      alignContent: "center",
      backgroundColor: COLORS.gray2,
      marginHorizontal: 10,
      height: "auto",
      justifyContent: "center",
      marginBottom: 10,
    },
    titleStyle: {
      color: COLORS.white,
      fontFamily: FONT.bold,
      justifyContent: "center",
      fontSize: SIZES.medium,
    },
    textStyle: {
      color: COLORS.white,
      fontFamily: FONT.regular,
      justifyContent: "center",
      alignItems: 'center',
      fontSize: SIZES.small,
      justifyContent: 'space-between',
    },
    textPercent: {
      color: COLORS.tertiary,
      fontFamily: FONT.regular,
      justifyContent: "center",
      fontSize: SIZES.small,
      justifyContent: 'space-between',
    },
    contentStyle: {
      justifyContent: "center", // Center the cell text horizontally
    },
  });
  