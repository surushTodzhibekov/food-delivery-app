import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

function Items({ source, text, color }) {
  return (
    <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
      <Image source={source} style={{ height: 40, width: 40 }} />
      <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    backgroundColor: "#f9dd7a",
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default Items;
