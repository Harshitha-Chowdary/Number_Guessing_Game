import { useState } from 'react';
import { StyleSheet,View, SafeAreaView} from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from './Screens/GameScreen';

export default function App(){
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber){
   setUserNumber(pickedNumber); 
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber}/>;
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


