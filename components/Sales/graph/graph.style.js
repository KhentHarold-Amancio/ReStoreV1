import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
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