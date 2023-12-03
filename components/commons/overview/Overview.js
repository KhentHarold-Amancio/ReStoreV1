import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import styles from "./Overview.style";
import { Card, Text } from '@ui-kitten/components';

const Overview = () => {
  return (
    <View style={styles.container}>
        <Card style={styles.cardContainer}>
            <View style={{backgroundColor: 'transparent'}}>
                <Text style={styles.textStyle}>Overview</Text>
            </View>
        </Card>
      <Divider style={styles.dividerStyle} />
    </View>
  );
};

export default Overview;
