import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useRouter, Stack, Redirect } from "expo-router";

import { COLORS, images, FONT } from "../../constants";
import HeaderText from "../../components/commons/header/headerText";
import HeaderLogo from "../../components/commons/header/headerLogo";
import styles from "../../components/commons/header/styles/header.style";

import Overview from "../../components/commons/overview/Overview";
import SaleSummaryCard from "../../components/Sales/cards/SaleSummaryCard";
import SaleSummaryGraph from "../../components/Sales/cards/SaleSummaryGraph";
import SaleSummaryTable from "../../components/Sales/cards/SaleSummaryTable";
import ProductListCard from "../../components/Sales/cards/ProductListCard";

const SalesSummaryView = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray }}>
      <ScrollView>
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
      <Overview />
      <SaleSummaryGraph handleNavigate={() => router.push('/product-list/list')}/>
      <SaleSummaryTable />
      <ProductListCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SalesSummaryView;
