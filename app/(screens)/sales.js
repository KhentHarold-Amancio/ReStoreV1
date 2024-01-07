import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter, Stack, Redirect } from "expo-router";

import { COLORS, images, FONT } from "../../constants";
import HeaderText from "../../components/commons/header/headerText";
import HeaderLogo from "../../components/commons/header/headerLogo";
import styles from "../../components/commons/header/styles/header.style";

import Overview from "../../components/commons/overview/Overview";
import SaleSummaryCard from "../../components/Sales/cards/SaleSummaryCard";
import SaleSummaryGraph from "../../components/Sales/cards/SaleSummaryGraph";
import SaleSummaryTable from "../../components/Sales/cards/SaleSummaryTable";
import SummaryCard from "../../components/Homes/cards/SummaryCard";
import { useRestore } from "../../hooks/useRestore";

const SalesView = () => {
  const router = useRouter();
  const { isLoading, error } = useRestore();
  const [selectedValue, setSelectedValue] = useState("month");

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray, flex: 1}}>
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
        <SaleSummaryCard />
        <SummaryCard />
          <SaleSummaryGraph
            isLoading={isLoading}
            selectedValue={selectedValue}
            handleValueChange={handleValueChange}
          />

        <SaleSummaryTable />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SalesView;
