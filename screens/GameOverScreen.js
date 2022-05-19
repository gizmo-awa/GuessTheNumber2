import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import myColors from "../constants/colors";

function GameOverScreen({ rounds, selectedNumber, reset }) {
  return (
    <View style={styles.screen}>
      <Text>The game is over</Text>
      <Text>Took me {rounds} rounds</Text>
      <Text>The number was: {selectedNumber}</Text>
      <View style={styles.button}>
        <Button title="Start Again" color={myColors.primary} onPress={reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default GameOverScreen;
