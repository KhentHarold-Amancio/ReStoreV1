import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AboutStackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="policy" options={{ headerShown: true }} />
    </Stack>
  )
}
export default AboutStackLayout