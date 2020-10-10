import React from "react";
import { View, StyleSheet, Picker } from "react-native";

function PickerItem(props) {
  return (
    <View style={styles.container}>
      <Picker.Item
        label="Los Angeles"
        value="Los Angeles"
        style={{ fontWeight: "bold" }}
      />
      <Picker.Item label="India" value="India" style={{ fontWeight: "bold" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PickerItem;
