import { useState } from 'react';
import { StyleSheet,View} from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from './Screens/GameScreen';

export default function App(){
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
   setUserNumber(pickedNumber); 
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen/>
  }
  return(
    <View style={styles.rootscreen}>
        {screen}
    </View>
  );
}
const styles=StyleSheet.create({
  rootscreen:{
    backgroundColor:'#ddb52f',
    flex:1
  }
});


