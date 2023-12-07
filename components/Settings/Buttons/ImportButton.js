import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Dimensions } from "react-native";
import {
  COLORS,
  ENDPOINT,
  FONT,
  SIZES,
  ENDPNTUPLOAD,
} from "../../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import axios from "axios";

const { width } = Dimensions.get("window");
const buttonWidth = width * 0.95;

const ImportButton = () => {
  const Import = async () => {
    // You can add more logic or actions here
    try {
      const response = await fetch("http://192.168.254.116:5000/monthly_sales");

      if (response.ok) {
        const data = await response.json();
        console.log("Server API is working:", data);
      } else {
        console.log(
          "Server API request failed:",
          response.status,
          response.statusText
        );
      }

      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });

      console.log("Document Picker Result:", result);

      if (!result.cancelled) {
        const formData = new FormData();
        formData.append("file", {
          uri: result.uri,
          name: result.name,
          type: "text/csv",
        });

        const response = await axios.post(ENDPNTUPLOAD, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Server Response:", response.data);

        // Handle the server response as needed
      } else {
        console.log("File selection canceled");
      }
    } catch (documentPickerError) {
      console.error("Error picking document:", documentPickerError);
      // Handle the error as needed
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Import}>
        <Text style={styles.textProperty}>Import File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImportButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 56,
    width: buttonWidth,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
  },
  textProperty: {
    fontSize: SIZES.smallmedium,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
});
