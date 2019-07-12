import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SH } from "../utils/sizes";
import ItemContainer from "./ItemContainer";
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
  },
  {
    name: "VolleyBall",
    imgUri:
      "https://images-na.ssl-images-amazon.com/images/I/71kjs9OiBdL._SX425_.jpg",
    price: 45.0
  },
  {
    name: "FootBall",
    imgUri:
      "https://images-na.ssl-images-amazon.com/images/I/51OM%2BtVJ6AL.jpg",
    price: 76.0
  },
  {
    name: "GolfBall",
    imgUri:
      "https://contents.mediadecathlon.com/p1345747/800x800/sq/distance_100_golf_ball_x12_-_white_inesis_golf_8334028_1345747.jpg?k=8bfca050583b3bfb22ace6db8769f696",
    price: 26.0
  },
  {
    name: "BeiseBall",
    imgUri:
      "https://cdn.shopify.com/s/files/1/0097/7152/products/BN-200-USSSA_1800x1800.jpg?v=1475791778",
    price: 59.0
  }
];

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
