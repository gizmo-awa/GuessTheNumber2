import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [numberOfGuesses, setnumberOfGuesses] = useState(0);

  const resetGame = () => {
    setnumberOfGuesses(0);
    setSelectedNumber(undefined);
  };

  const gameOverHandler = (rounds) => {
    setnumberOfGuesses(rounds);
  };

  const startGameHandler = (number) => {
    setSelectedNumber(number);
  };
  console.log(numberOfGuesses);
  console.log(selectedNumber);
  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (selectedNumber && numberOfGuesses === 0) {
    content = (
      <GameScreen
        selectedNumber={selectedNumber}
        onGameOver={gameOverHandler}
      />
    );
  }
  console.log(selectedNumber && numberOfGuesses > 0);
  if (selectedNumber && numberOfGuesses > 0) {
    console.log("entramos al if de gameover");
    content = (
      <GameOverScreen
        rounds={numberOfGuesses}
        selectedNumber={selectedNumber}
        reset={resetGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header style={styles.screen2} title={"Will you guess the number?"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});