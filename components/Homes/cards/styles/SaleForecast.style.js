import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";



const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    marginHorizontal: 10,
    marginBottom: 10,
    height: SIZES.cardHeight,
    paddingRight: 20,
    paddingLeft: 20,
  },
  textStyle: {
    color: COLORS.white,
  },
  contentStyle: {
    width: SIZES.cardWidth,
    justifyContent: "center",
  },
  image: {
    marginTop: 25,
    height: 100,
    width: 100,
    position: "absolute",
    alignContent: "center",
    alignSelf: "center",
    right: 10,
  },
});

export default styles;
