import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { FONT } from '../../../constants'

const HeaderText = ({headerTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{headerTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
  },
  textStyle: {
    fontSize: 40,
    fontFamily: FONT.bold,
    color: 'black',
  },
})

export default HeaderText