import { StyleSheet,View,Image,Text } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return(
    <View style={styles.rootcontainer}>
        <Title>Game is Over</Title>
        <View style={styles.Imagecontainer}>
           <Image
           style={styles.Image} 
           source={require('../assets/Images/success.png')}/>
        </View>
        <Text style={styles.summarytext}>
          Your phone needed 
          <Text style={styles.highlight}> {roundsNumber} </Text>
           rounds to guess the userNumber
           <Text style={styles.highlight}> {userNumber} </Text> 
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
    </View> 
    )
       
}

export default GameOverScreen;

const styles= StyleSheet.create({
    Imagecontainer:{
       width:300,
       height:300,
       borderRadius:150,
       borderWidth:3,
       borderColor:'skyblue',
       overflow:'hidden',
       margin: 36
    },
    Image:{
        width:'100%',
        height:'100%'
    },
    rootcontainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    summarytext:{
        fontFamily: 'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:'brown'
     }
    })