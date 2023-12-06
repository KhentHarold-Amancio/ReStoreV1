import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
  },
  headerText: {
    fontSize: 45,
    paddingBottom: 10,
    fontFamily: "ChakraPetchBold",
    color: COLORS.white,
  },
  squareShapeView: {
    width: "95%",
    height: SIZES.height * 0.70,
    backgroundColor: COLORS.gray,
    borderRadius: 16,
    overflow: "hidden",
  },
  scrollContainer: {
    flex: 1,
  },
  textShape: {
    color: COLORS.white,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    fontFamily: FONT.medium,
  },
  textShape2: {
    color: COLORS.white,
    marginLeft: 20,
    fontFamily: FONT.bold,
  },
  textShape3: {
    color: COLORS.white,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 20,
    marginBottom: 10,
    fontFamily: FONT.bold,
  },
  term: {
    color: COLORS.white,
    marginRight: 40, // Add left margin for the text
  },
  checkboxContainer: {
    width: SIZES.width * 0.8,
    flexDirection: "row", // Arrange checkbox and text horizontally
    alignItems: "center", // Vertically center align them
    alignContent: "center",
    alignSelf: "center",
    paddingRight: 20,
    marginVertical: 10,
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderColor: COLORS.white, // Add right margin for spacing
  },
  buttonShape: {
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    marginLeft: "3%",
    marginRight: "3%",
    width: SIZES.cardWidth * 0.9,
    height: 60,
    backgroundColor: "#3463E1",
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  disabledButton: {
    backgroundColor: "gray", // Change the button color when disabled
  },
  buttonStyle: {
    color: "white", // Add text color
  },
});

export default styles;
