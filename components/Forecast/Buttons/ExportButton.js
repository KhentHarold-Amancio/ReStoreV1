import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from '../../../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const { width } = Dimensions.get("window");
const buttonWidth = width * 0.95;

const ExportButton = () => {
    const Export = () => {
        // You can add more logic or actions here
      };
  return (
    <View>
        <TouchableOpacity onPress={Export} style={styles.container}>
            <Text style={styles.textProperty}>Export File</Text>
        </TouchableOpacity>
    </View>
    
  )
}

export default ExportButton

const styles = StyleSheet.create({
    container: {
        height: 56,
        width: buttonWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: COLORS.primary,
        borderRadius: 16,
    },
    button: {

    },
    textProperty: {
        fontSize: SIZES.smallmedium,
        fontFamily: FONT.medium,
        color: COLORS.white,
    },

})