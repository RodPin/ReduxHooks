import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Main() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Cart App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    padding: 30
  },
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  }
});
