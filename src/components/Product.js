import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function Product({ onPress, marginTop, source, title, price }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...{ marginTop: marginTop } }}
    >
      <View style={styles.product}>
        <Image
          source={require("../images/3.png")}
          style={{ height: 25, width: 20 }}
        />
        <Text style={styles.productText}>Calories</Text>
      </View>
      <Image source={source} style={styles.producrImage} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          paddingHorizontal: 10,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingHorizontal: 10,
          color: "#848385",
        }}
      >
        {price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5fa",
    height: 280,
    width: 160,
    borderRadius: 20,
    marginRight: 10,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  productText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  producrImage: {
    alignSelf: "center",
    height: 105,
    width: 130,
    marginTop: 15,
    marginBottom: 15,
  },
});

export default Product;
