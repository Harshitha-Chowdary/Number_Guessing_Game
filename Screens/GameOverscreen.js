import { StyleSheet,View,Image,Text } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen(){
    return(
    <View style={styles.rootcontainer}>
        <Title>Game is Over</Title>
        <View style={styles.Imagecontainer}>
           <Image
           style={styles.Image} 
           source={require('../assets/Images/success.png')}/>
        </View>
        <Text>
          Your phone needed x rounds to guess the number y
        </Text>
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
    }
    
});