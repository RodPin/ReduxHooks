import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ItemContainer from "./ItemContainer";
import { SH } from "../utils/sizes";
import { useSelector } from "react-redux";
const items = [
  {
    imgUri: "https://www.urbanize.com.ph/3500-big_default_2x/soccer-ball.jpg",
    price: "54,00"
  },
  {
    imgUri:
      "https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dwf0e15940/images/hi-res/74876E_SIDE.jpg?sw=555&sh=689&sm=cut",
    price: "65,00"
  }
];
function printList(cart) {
  var aux = [];

  if (cart) {
    cart.map((x, i) =>
      aux.push(
        <Text key={i} style={styles.text}>
          {x.price}
        </Text>
      )
    );
  }
  return aux;
}
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
        <ItemContainer item={items[0]} />
        <ItemContainer item={items[1]} />
      </View>
      <Text style={styles.text}> {printList(cart)}</Text>
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
