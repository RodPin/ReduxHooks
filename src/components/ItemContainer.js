import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { SH, SW } from "../utils/sizes";
import { useDispatch } from "react-redux";
function addToCart(item) {
  return {
    type: "ADD_TO_CART",
    item
  };
}
function removeFromCart(item) {
  return {
    type: "REMOVE_FROM_CART",
    item
  };
}
function ItemContainer({ item }) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
      <View
        style={{
          ...styles.container
        }}
      >
        <Image
          style={styles.img}
          source={{
            uri: item.imgUri
          }}
        />
        <Text style={styles.text}>R$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SH * 0.24,
    height: SW * 0.4,
    borderWidth: 5,
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
