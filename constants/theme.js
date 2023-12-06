import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.95;
const cardHeight = height * 0.2;

const COLORS = {
  primary: "#3463E1",
  secondary: "rgba(234, 115, 78, 0.89)",
  tertiary: "#6BEBA4",
  quaternary: "#F94144",
  quinary: "#CECECE",
  senary: "#E8E8E8",

  gray: "rgba(19, 19, 24, 0.90)",
  gray2: "#353436",
  gray3: "#979699",
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  sunriseOrange: "#EA734E",
  barline: "#F2EDEE",
};

const FONT = {
  light: "ChakraPetchLight",
  regular: "ChakraPetchRegular",
  medium: "ChakraPetchMedium",
  bold: "ChakraPetchBold",
};

const SIZES = {
  width,
  height,
  xxSmall: 6,
  xsSmall: 8,
  xSmall: 10,
  small: 12,
  smallmedium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  cardHeight,
  cardWidth,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
