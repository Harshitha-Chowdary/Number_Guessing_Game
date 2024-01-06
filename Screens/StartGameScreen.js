import { TextInput, View,StyleSheet,Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99){
            Alert.alert('Ivalid Number!',
            'Number has to be a number between 1 and 99.',
            [{text:'Okay', style:'destructive',onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(chosenNumber);
    } 
    return(
        <View style={styles.inputContainer}>
            <TextInput
               style={styles.numberInput}
               maxLength={2}
               keyboardType="number-pad"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={numberInputHandler}
               value={enteredNumber}
             />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
        </View>
    )
};
export default StartGameScreen;
const styles=StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginTop:100, 
        marginHorizontal:24,
        borderRadius: 8,
        backgroundColor:'#4e0329',
        elevation:4,
        shadowColor:'black',
        ShadowOffset:{ width:0, height:2},
        shadowOpacity: 0.25
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:'bold',
        textAlign:'center',
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
});