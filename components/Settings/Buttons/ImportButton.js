import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
import * as DocumentPicker from "expo-document-picker";
<<<<<<< HEAD
import { useRestore } from "../../../hooks/useRestore";

const ImportButton = () => {
  const { uploadFile } = useRestore();

  const ImportFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
        copyToCacheDirectory: true,
      }); // returns a json object

      console.log("Document Picker Result:", result);
      if (result.type !== null) {
        uploadFile(result["assets"][0]); // documentPickerResult["assets"][0] is the file object
        console.log("File uploaded");
=======
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import axios from "axios";
import {
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc,
} from "firebase/firestore";
import Papa from "papaparse";

const { width } = Dimensions.get("window");
const buttonWidth = width * 0.95;

const storeDataToFirestore = async (data) => {
  try {
    const firestore = getFirestore();
    const collectionRef = collection(firestore, "imported data");
    // Iterate through the parsed CSV data and store each entry to Firestore
    data.forEach(async (entry) => {
      if (entry["Date"]) {
        await addDoc(collectionRef, entry);
      }
    });

    console.log("Data stored to Firestore successfully");
  } catch (error) {
    console.error("Error storing data to Firestore:", error);
  }
};

const ImportButton = () => {
  const [filedata, setFiledata] = useState(null);

  const Import = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      console.log("Document Picker Result:", result);

      if (!result.cancelled) {
        const asset = result.assets[0];
        if (
          asset.mimeType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
          console.log("File URI:", asset.uri);

          try {
            const fileContent = await FileSystem.readAsStringAsync(asset.uri, {
              encoding: FileSystem.EncodingType.Base64,
            });
            const workbook = XLSX.read(fileContent, { type: "base64" });
            const sheetName = workbook.SheetNames[0];
            const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);

            console.log("Excel to CSV Result:", csvData);

            Papa.parse(csvData, {
              header: true,
              dynamicTyping: true,
              complete: (results) => {
                // Handle the parsed CSV data
                console.log(results.data);
                // Now you can store 'results.data' to Firestore
                storeDataToFirestore(results.data);
              },
            });
          } catch (readFileError) {
            console.error("Error reading file:", readFileError);
          }
        } else {
          console.log("File is not an Excel file");
        }
      } else {
        console.log("File selection canceled");
>>>>>>> 49ff8e0784df07276dd1eb7c32d4e786b4b856a4
      }

    } catch (documentPickerError) {
      console.error("Error picking document:", documentPickerError);
    }
  };

  return (
    <TouchableOpacity onPress={ImportFile} style={styles.container}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textProperty}>Import File</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImportButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    width: SIZES.width,
  },
  textProperty: {
    fontSize: SIZES.smallmedium,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  buttonStyle: {
    height: 56,
    width: SIZES.width * 0.95,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
  }
});
