import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../../constants";

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
    height: SIZES.height * 0.65,
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
  },
  textShape2: {
    color: COLORS.white,
    marginLeft: 20,
    fontWeight: "bold",
  },
  textShape3: {
    color: COLORS.white,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 20,
    marginBottom: 10,
  },
  term: {
    color: COLORS.white,
    marginRight: 40, // Add left margin for the text
  },
  checkboxContainer: {
    flexDirection: "row", // Arrange checkbox and text horizontally
    alignItems: "center", // Vertically center align them
    margin: "5%", // Add margin for spacing
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
    height: SIZES.cardHeight * 0.3,
    backgroundColor: "#3463E1",
    borderRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "gray", // Change the button color when disabled
  },
  buttonStyle: {
    color: "white", // Add text color
  },
});

export default styles;
