import React from "react";
import { StyleSheet, Text, View } from "react-native";

import myColors from "../constants/colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: myColors.primary,
    padding: 10,
    borderRaddius: 10,
    marginVerticalk: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: myColors.secondary,
    fontSize: 22,
  },
});

export default NumberContainer;