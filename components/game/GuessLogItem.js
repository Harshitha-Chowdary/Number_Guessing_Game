import { View,Text,StyleSheet } from "react-native";
function GuessLogItem({roundNumber, guess}){
   return(
   <View style={styles.listItem}>
     <Text style={styles.ItemText}>{roundNumber}</Text>
     <Text> Opponent's Guess: {guess}</Text>
   </View> 
   );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:{
        borderColor:'black',
        borderWidth:1,
        borderRadius: 40,
        padding:12,
        marginVertical:8,
        backgroundColor:'#ddb52f',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{ width:0,height:0},
        shadowRadius:3,
    },
    ItemText:{
        fontFamily:'open-sans'
    }
})