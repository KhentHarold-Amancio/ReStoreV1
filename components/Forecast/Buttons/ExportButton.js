import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as XLSX from 'xlsx';
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const buttonWidth = width * 0.95;

const ExportButton = ({ jsonData }) => {
  console.log(jsonData)
  const exportToExcel = async () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
    const wbout = XLSX.write(workbook, { type: 'binary', bookType: 'xlsx' });
    const uri = FileSystem.cacheDirectory + 'exported_data.xlsx';
    
    await FileSystem.writeAsStringAsync(uri, wbout, { encoding: FileSystem.EncodingType.Base64 });
    await Sharing.shareAsync(uri);
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
  button: {},
  textProperty: {
    fontSize: SIZES.smallmedium,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
});