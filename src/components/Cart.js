import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { SH, SW } from "../utils/sizes";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

function clearCart() {
  return {
    type: "CLEAR_CART"
  };
}

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  var total = 0;
  cart.map(item => (total = total + item.price));
  return (
    <View style={styles.cartContainer}>
      <Icon size={SH * 0.07} color="white" name="shopping-cart" />
      <Text style={styles.text}>R$: {total},00</Text>
      <TouchableOpacity onPress={() => dispatch(clearCart())}>
        <View
          style={{
            height: SH * 0.07,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ ...styles.text, fontSize: SH * 0.02 }}>Clear</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: SH * 0.18,
    width: SW * 0.25
  },
  text: {
    color: "white",
    fontSize: SH * 0.04
  },
  cartContainer: {
    width: SW * 0.6,
    height: SH * 0.08,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 5,
    justifyContent: "space-between",
    paddingHorizontal: 5
  }
});
