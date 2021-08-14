
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button} from 'react-native';
import Header from './components/Header'
import StartGame from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOver from './screens/GameOver';
export default function App() {

  const [enteredValue,setEnteredValue] = useState('')
  const [gameRounds,setGameRounds] = useState(0)
  const startGameHandler = (number) => {
    console.log("bbb:"+number)
    setEnteredValue(number)
  }
  const gameOverHandler = (gameRounds_) => {
    setGameRounds(gameRounds_);
  }

  const newGame = () => {
    setGameRounds(0)
    setEnteredValue(null)
  }
  let content  = <StartGame onStartGame={startGameHandler}/>
  if(enteredValue && gameRounds <=0) {
    content  = <GameScreen userInput={enteredValue} gameOverHandler={gameOverHandler}  />
  } else if(gameRounds > 0) {
    content  = <GameOver newGame={newGame}/>
  }
  return (
    <View style={styles.container}>
      <Header title="Guess Number" ></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
