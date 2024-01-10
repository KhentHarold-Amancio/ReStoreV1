import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { SERVER_URL } from "../../../constants";
import * as XLSX from 'xlsx';
import { Dimensions } from "react-native";
import axios from 'axios'; // Add axios for making HTTP requests
import { Buffer } from 'buffer'; // Import Buffer

const { width } = Dimensions.get("window");
const buttonWidth = width * 0.95;

const ExportButton = () => {
  const exportToExcel = async () => {
    try {
      // Fetch data from both endpoints
      const response1 = await axios.get(`${SERVER_URL}/get_json_data`);
      const jsonData1 = response1.data;
  
      const response2 = await axios.get(`${SERVER_URL}/get_sorted_product_predictions`);
      const jsonData2 = response2.data;
  
      console.log("jsonData2 (raw):", jsonData2); // Log to check the structure
  
      // Check if the first dataset is in the correct format
      if (!Array.isArray(jsonData1)) {
        console.warn("JSON data is not available or not in the correct format for export (jsonData1).");
        return;
      }
  
      // Flatten the second dataset
      let flattenedData2 = [];
      if (jsonData2.length > 0) {
        const productData = jsonData2[0]; // Access the first (and only) item in the array
        Object.keys(productData).forEach(key => {
          if (productData[key].predictions && Array.isArray(productData[key].predictions)) {
            productData[key].predictions.forEach(prediction => {
              flattenedData2.push({ ...prediction, ProductID: key });
            });
          }
        });
      }
  
      console.log("flattenedData2:", flattenedData2);
  
      // Create the workbook and sheets for Excel
      const workbook = XLSX.utils.book_new();
      const worksheet1 = XLSX.utils.json_to_sheet(jsonData1);
      const worksheet2 = XLSX.utils.json_to_sheet(flattenedData2);
  
      XLSX.utils.book_append_sheet(workbook, worksheet1, "Sheet1");
      XLSX.utils.book_append_sheet(workbook, worksheet2, "Sheet2");

      const wbout = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });

      // Convert binary string to base64 using Buffer
      const base64String = Buffer.from(wbout, 'binary').toString('base64');

      const uri = FileSystem.cacheDirectory + 'exported_data.xlsx';
      await FileSystem.writeAsStringAsync(uri, base64String, { encoding: FileSystem.EncodingType.Base64 });
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.warn("Error during Excel export:", error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={exportToExcel} style={styles.container}>
        <Text style={styles.textProperty}>Export File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExportButton;

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: buttonWidth,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    flexDirection: "column-reverse",
  },
  textProperty: {
    fontSize: SIZES.smallmedium,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
});