import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter } from "expo-router";
import { useRestore } from '../../hooks/useRestore';

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
import ProductForecastTable from "../../components/Forecast/cards/ProductForecastTable";
import { useDemand } from "../../hooks/useDemand";

const ForecastView = () => {
  const router = useRouter();
  const { fetchSalesData, fetchForecastData, salesData, forecastData, isLoading } = useRestore();
  const { fetchProdData, prodData, isLoadingDemand } = useDemand()

    useEffect(() => {
    const fetch = async () => {
      await fetchSalesData();
      await fetchForecastData();
      await fetchProdData();
    };
    fetch().then(() => {
        console.log("Fetching done.")
    }).catch((error) => {
        console.log("Fetching wasn't done due to following errors: ", error)
    });
  }, []);

  useEffect(() => {
    console.log("Forecast Data:", forecastData);
    console.log("Product Demand Data:", prodData);
  }, [forecastData]);
  
  return (
      <SafeAreaView style={{ backgroundColor: COLORS.gray }}>
      <ScrollView style={{ marginTop: -5 }}>
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
        <ForecastGraph forecastData={forecastData} isLoading={isLoading} salesData={salesData} />
        <ForecastTable forecastData={forecastData} isLoading={isLoading}  />
          <ProductForecastTable prodData={prodData} isLoadingDemand={isLoadingDemand} />
        <ExportButton/>
      </ScrollView>
      </SafeAreaView>
  )
}

export default ForecastView