import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ForecastSaleCard from '../../components/Forecast/cards/ForecastSaleCard'
import Overview from '../../components/commons/overview/Overview';
import ForecastGraph from '../../components/Forecast/cards/ForecastGraph';
import ForecastTable from '../../components/Forecast/cards/ForecastTable';
import ExportButton from '../../components/Forecast/Buttons/ExportButton';

import HeaderText from "../../components/commons/header/headerText";
import HeaderLogo from "../../components/commons/header/headerLogo";
import { MaterialIcons } from "@expo/vector-icons";

import { COLORS, images, FONT } from "../../constants";
import styles from "../../components/commons/header/styles/header.style";

const ForecastView = () => {
  const router = useRouter();
  return (
      <ScrollView style={{backgroundColor: COLORS.gray}}>
      <Stack.Screen
        options={{
          headerStyle: { height: 120, backgroundColor: COLORS.gray },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <HeaderLogo logoUrl={images.logo} />
            </View>
          ),
          headerTitle: <HeaderText headerTitle="Forecast" />,
          headerTitleStyle: {
            marginTop: 10,
            fontSize: 40,
            fontFamily: FONT.bold,
            color: COLORS.white,
          },
        }}
      />
      {/* Below is where you will add your components */}
        <ForecastSaleCard />
        <Overview />
        <ForecastGraph />
        <ForecastTable />
        <ExportButton/>
      </ScrollView>
  )
}

export default ForecastView