import { useState } from 'react';
import { StyleSheet,View, SafeAreaView} from "react-native";
import { useFonts  } from 'expo-font'; 
import AppLoading from 'expo-app-loading';
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverscreen';

export default function App(){
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  function pickedNumberHandler(pickedNumber){
   setUserNumber(pickedNumber); 
   setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if(gameIsOver && userNumber){
    screen= <GameOverScreen 
     userNumber={userNumber}
     roundsNumber={guessRounds}
     onStartNewGame={startNewGameHandler}/>
  }
  return(
    <View style={styles.rootscreen}>
    <SafeAreaView style={styles.rootscreen}>
    {screen}
    </SafeAreaView>          
    </View>
  );
}
const styles=StyleSheet.create({
  rootscreen:{
    backgroundColor:'#ddb52f',
    flex:1
  }
});


