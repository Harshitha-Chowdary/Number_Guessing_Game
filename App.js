import { useState } from 'react';
import { StyleSheet,View, SafeAreaView} from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverscreen';

export default function App(){
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber){
   setUserNumber(pickedNumber); 
   setGameIsOver(false);
  }
  function gameOverHandler(){
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if(gameIsOver && userNumber){
    screen= <GameOverScreen/>
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


