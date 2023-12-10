import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
import * as DocumentPicker from "expo-document-picker";
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
