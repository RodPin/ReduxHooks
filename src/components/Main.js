import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemContainer from "./ItemContainer";
import { SH } from "../utils/sizes";
import { useSelector } from "react-redux";
import Cart from "./Cart";
const items = [
  {
    name: "Soccer Ball",
    imgUri: "https://www.urbanize.com.ph/3500-big_default_2x/soccer-ball.jpg",
    price: 54.0
  },
  {
    name: "BasketBall",
    imgUri:
      "https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dwf0e15940/images/hi-res/74876E_SIDE.jpg?sw=555&sh=689&sm=cut",
    price: 65.0
  }
];

export default function Main() {
  const cart = useSelector(state => state.cart);
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Cart App</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <ItemContainer item={items[0]} selected={items[0].selected} />
        <ItemContainer item={items[1]} selected={items[1].selected} />
      </View>

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
