import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Snackbar } from 'react-native-paper';
import * as DocumentPicker from "expo-document-picker";
import { useRestore } from "../../../hooks/useRestore";
import { COLORS, FONT, SIZES } from "../../../constants";

const ImportButton = () => {
  const { uploadFile, refetch } = useRestore();
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [isErrorSnackbarVisible, setErrorSnackbarVisible] = useState(false);

  const toggleSnackbar = () => setSnackbarVisible(!isSnackbarVisible);
  const dismissSnackbar = () => setSnackbarVisible(false);

  const toggleErrorSnackbar = () => setErrorSnackbarVisible(!isErrorSnackbarVisible);
  const dismissErrorSnackbar = () => setErrorSnackbarVisible(false);

  const importFile = async () => {
    setErrorSnackbarVisible(false);
    setSnackbarVisible(false);
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
        copyToCacheDirectory: true,
      });

      console.log("Document Picker Result:", result);
      if (result.type !== null) {
        uploadFile(result.assets[0])
          .then(() => toggleSnackbar())
          .catch(() => {
            toggleErrorSnackbar();
            toggleSnackbar();
          });
        console.log("File uploaded");
      }
    } catch (documentPickerError) {
      toggleErrorSnackbar();
    } finally {
      refetch();
    }
  };

  return (
    <TouchableOpacity onPress={ importFile } style={styles.container}>
      <View style={styles.buttonStyle}>
        <Text style={styles.textProperty}>Import Sales File</Text>
        <Snackbar
          visible={isSnackbarVisible}
          onDismiss={dismissSnackbar}
        >
          ✅ File Imported Successfully
        </Snackbar>
        <Snackbar
          visible={isErrorSnackbarVisible}
          onDismiss={dismissErrorSnackbar}
        >
          ❌ Error Uploading File
        </Snackbar>
      </View> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 66,
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
  },
});

export default ImportButton;
