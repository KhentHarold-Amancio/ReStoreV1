import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const HeaderLogo = ({ logoUrl }) => {
  return (
      <Image
        source={logoUrl}
        resizeMode="cover"
        style={styles.logo}
      />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
});

export default HeaderLogo;
