import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

function Detail({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/** Start of Header */}
        <View style={styles.detail}>
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require("../images/2.png")} />
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", alignItems: "center" }}>
            <View style={styles.subDetail}>
              <Image
                source={require("../images/3.png")}
                style={{ width: 20, height: 25 }}
              />
              <Text style={styles.detailText}>290 Calories</Text>
            </View>
          </View>
          <View style={{ width: "10%" }}>
            <Entypo name="heart" color="#f9dd7a" size={30} />
          </View>
        </View>
        {/** End of Header */}
        <Image source={require("../images/5.png")} style={styles.detailImage} />
        <View style={styles.quantity}>
          <TouchableOpacity onPress={addQuantity}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>+</Text>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", paddingHorizontal: 20 }}
          >
            {quantity}
          </Text>
          <TouchableOpacity onPress={subtractQuantity}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>-</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
            marginTop: 30,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              SmokeHouse
            </Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 15, color: "#a4a4a9" }}
            >
              Beef burger
            </Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 28, marginLeft: 80 }}>
            $12.99
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Ingredients
        </Text>
        {/** start of ingredients */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20, marginHorizontal: 20 }}
        >
          <View style={styles.ingredients}>
            <Image
              source={require("../images/11.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
          <View style={styles.ingredients}>
            <Image
              source={require("../images/13.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
          <View style={styles.ingredients}>
            <Image
              source={require("../images/12.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
          <View style={styles.ingredients}>
            <Image
              source={require("../images/8.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
          <View style={styles.ingredients}>
            <Image
              source={require("../images/bl.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
          <View style={styles.ingredients}>
            <Image
              source={require("../images/7.png")}
              style={{ height: 30, width: 30 }}
            />
          </View>
        </ScrollView>
        {/** end of ingredients */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          Details
        </Text>
        <Text style={styles.text}>
          The most unique fire grilled patty, flame grilled, charred, seared,
          well-done All natural beef, grass-feed beef, Fiery, juicy, greacy.
          delicous moist The most unique fire grilled patty, flame grilled,
          charred, seared, well-done All natural beef, grass-feed beef, Fiery,
          juicy, greacy. delicous moist
        </Text>
      </ScrollView>
      <View style={styles.cart}>
        <Entypo name="shopping-cart" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
  },
  subDetail: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  detailText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  detailImage: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#f6f3fb",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  ingredients: {
    borderRadius: 15,
    borderWidth: 0.1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  text: {
    color: "#a4a4a9",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: "justify",
    marginBottom: 20,
  },
  cart: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#000",
    borderRadius: 25,
    height: 50,
    width: 50,
    bottom: 20,
  },
});

export default Detail;
