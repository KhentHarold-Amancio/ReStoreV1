import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      width: SIZES.width * 0.9,
      // height: 500,
      justifyContent: "center",
      alignContent: "center",
      overflow: "hidden",
    },
    graphContainer: {
      width: SIZES.width * 0.9,
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