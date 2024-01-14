import { StyleSheet,View,Image,ScrollView,Text,useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    const {width,height}=useWindowDimensions();

    let imageSize=300;

    if(width<380){
        imageSize =150;
    }
    if (height < 400){
        imageSize = 80;
    }

    const imagestyles = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2
    };
    
    return(
<ScrollView style={styles.screen}>
    <View style={styles.rootcontainer}>
        <Title>Game is Over</Title>
        <View style={[styles.Imagecontainer, imagestyles]}>
           <Image
           style={styles.Image} 
           source={require('../assets/Images/success.png')}/>
        </View>
        <Text style={styles.summarytext}>
          Your phone needed 
          <Text style={styles.highlight}> {roundsNumber} </Text>
           rounds to guess the Number
           <Text style={styles.highlight}> {userNumber} </Text> 
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
    </View> 
</ScrollView>
);
       
}

export default GameOverScreen;
// const deviceWidth=Dimensions.get('window').width

const styles= StyleSheet.create({
    Imagecontainer:{
    //    width:deviceWidth<380? 150:300,
    //    height:deviceWidth<380? 150:300,
    //    borderRadius:deviceWidth<380? 75:150,
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
    screen:{
        flex:1
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:'brown'
     }
    })