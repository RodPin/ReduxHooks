import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SH, SW } from "../utils/sizes";

const ItemContainer = ({ imgUri, price }) => (
  <View style={styles.container}>
    <Image
      style={styles.img}
      source={{
        uri: imgUri
      }}
    />
    <Text style={styles.text}>R${price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: SH * 0.24,
    height: SW * 0.4,
    marginHorizontal: SW * 0.02,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    height: SH * 0.18,
    width: SW * 0.25
  },
  text: {
    fontSize: SH * 0.034
  }
});

export default ItemContainer;
