import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    width: SIZES.width * .97,
    height: 'auto',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.quinary,
  },
  headerLogoStyle: {
    width: 35,
    height: 35,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.gray2,
    width: SIZES.width * 1,
    height: SIZES.height * 0.14,
    alignContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  textStyle: {
    color: COLORS.white,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'auto',
    marginTop: -10,
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;
