import { StyleSheet, View, Dimensions } from "react-native";
function Card({children}){
 return <View style={styles.card}>
 {children}
 </View>
}

export default Card;

const deviceWidth=Dimensions.get('window').width;

const styles=StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginTop:deviceWidth < 380? 18: 36, 
        marginHorizontal:24,
        borderRadius: 8,
        backgroundColor:'#4e0329',
        elevation:4,
        shadowColor:'black',
        ShadowOffset:{ width:0, height:2},
        shadowOpacity: 0.25
    }
});