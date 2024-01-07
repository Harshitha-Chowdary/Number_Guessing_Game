import { StyleSheet,View,Text } from "react-native";

function GameOverScreen(){
    return(
    <View>
        <Text>Game is Over</Text>
    </View> 
    )
       
}

export default GameOverScreen;

const styles= StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#ddb52f',
        textAlign:'center',
        color:'red'
    }
})