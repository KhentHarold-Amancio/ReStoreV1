import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";



const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.senary,
    marginHorizontal: 3,
    marginBottom: 10,
    height: SIZES.cardSmallHeight,
    width: SIZES.cardSmallWidth,
  },
  ContentContainer: {
    marginTop:-8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12, // Adjust this based on your layout requirements
  },
  textStyle: {
    color: COLORS.Black,
  },
  contentStyle: {
    width: SIZES.cardSmallWidth,
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
