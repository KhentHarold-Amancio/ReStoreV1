import { COLORS, FONT, SIZES } from "../../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    width: SIZES.cardWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  dividerStyle: {
    width: SIZES.cardWidth * 0.7,
    height: 3,
    backgroundColor: COLORS.gray2,
  },
  cardContainer: {
    width: SIZES.cardWidth * 0.3,
    height: SIZES.cardWidth * 0.1,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: COLORS.gray2,
  },
  textStyle: {
    position: "absolute",
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    bottom: -11,
  },
});

export default styles;
