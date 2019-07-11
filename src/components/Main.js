import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemContainer from "./ItemContainer";
import { SH, SW } from "../utils/sizes";
export default function Main() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Cart App</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <ItemContainer
          imgUri="https://www.urbanize.com.ph/3500-big_default_2x/soccer-ball.jpg"
          price="54,00"
        />
        <ItemContainer
          imgUri="https://www.urbanize.com.ph/3500-big_default_2x/soccer-ball.jpg"
          price="54,00"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center"
    // padding: SH * 0.015
  },
  text: {
    fontSize: SH * 0.06,
    color: "white",
    fontWeight: "bold"
  }
});
