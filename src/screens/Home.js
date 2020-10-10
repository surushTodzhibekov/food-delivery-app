import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Picker } from "@react-native-community/picker";
import { Entypo } from "@expo/vector-icons";
import Items from "../components/Items";
import Product from "../components/Product";

function Home({ navigation }) {
  const [city, setCity] = useState([]);
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          marginHorizontal: 20,
        }}
      >
        <View style={{ width: "10%" }}>
          <Image source={require("../images/1.png")} />
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Picker
            selectedValue={city}
            style={{ height: 50, width: 160 }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            <Picker.Item
              label="Los Angeles"
              value="Los Angeles"
              style={{ fontWeight: "bold" }}
            />
            <Picker.Item
              label="Mumbai"
              value="Mumbai"
              style={{ fontWeight: "bold" }}
            />
            <Picker.Item
              label="Dubai"
              value="Dubai"
              style={{ fontWeight: "bold" }}
            />
          </Picker>
        </View>
        <View style={{ width: "10%" }}>
          <Entypo name="magnifying-glass" size={30} color="black" />
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Food that</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          meets your need
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 40 }}
      >
        <Items
          source={require("../images/5.png")}
          text="Burger"
          color="#f9dd7a"
        />
        <Items
          source={require("../images/10.png")}
          text="Burrito"
          color="#e5e4eb"
        />
        <Items
          source={require("../images/7.png")}
          text="Salads"
          color="#e5e4eb"
        />
        <Items
          source={require("../images/6.png")}
          text="Pizza"
          color="#e5e4eb"
        />
      </ScrollView>

      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 40,
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>New Product</Text>
        </View>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <Entypo name="dots-three-horizontal" size={25} color="#848385" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 30,
          justifyContent: "center",
        }}
      >
        <Product
          source={require("../images/4.png")}
          title="Smokehouse"
          price="10.99$"
          onPress={() => navigation.navigate("detail")}
        />
        <Product
          source={require("../images/9.png")}
          title="Honey Chilli"
          price="10.99$"
          marginTop={25}
          onPress={() => navigation.navigate("detail")}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 30 }}
      >
        <Product
          source={require("../images/6.png")}
          title="Adios Pizza"
          price="10.99$"
          onPress={() => navigation.navigate("detail")}
        />
        <Product
          source={require("../images/10.png")}
          title="Burrito"
          price="10.99$"
          marginTop={25}
          onPress={() => navigation.navigate("detail")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
