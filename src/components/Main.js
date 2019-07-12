import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SH } from "../utils/sizes";
import ItemContainer from "./ItemContainer";
import Cart from "./Cart";
import items from "../utils/items";

function renderList() {
  var aux = [];
  items.map((item, i) => {
    if (i % 2 == 0) {
      aux.push(
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <ItemContainer item={item} />
          <ItemContainer item={items[i + 1]} />
        </View>
      );
    }
  });
  return aux;
}

export default function Main() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Cart App</Text>
      {renderList()}
      <Cart />
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
