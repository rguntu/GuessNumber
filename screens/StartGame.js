import React, {useState} from 'react'
import { Text, View, StyleSheet,Button,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGame = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');
    const [confirm,setConfirm] = useState(false);
    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    const resetHandler = () => {
        setEnteredValue('');
    }
    let confirmedOutput;
    if(confirm) {
        confirmedOutput = 
        <Card style={styles.outputContainer}>
            <Text>You selected:</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            {/* <Button title="START GAME" onPress={() => Alert.alert('Simple Button pressed')}/> */}
            <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/> 
        </Card>
    }
    const confirmInputHandler = () => {
        const selectedNumber = parseInt(enteredValue)
        if(isNaN(selectedNumber) || selectedNumber <=0 || selectedNumber >99) {
            Alert.alert("Invalid value!", "Please enter value between 0 and 99", [{text:"OK",style:"destructive",onPress: resetHandler}])
        }
        setConfirm(true)
        setEnteredValue("")
        setSelectedNumber(selectedNumber)
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
      <View style={styles.screen}>
        <Text style={styles.splText}>Start New Game!</Text>
        <Card style={styles.inputContainer} >
        <Text>Select a Number</Text>
        <Input style={styles.input} blurOnSubmit autoCapitalize='none' 
        autoCorrect={false} keyboardType="number-pad" maxLength={2}   
        onChangeText={numberInputHandler} value={enteredValue} />
        <View style={styles.buttonContainer} >
            <Button style={styles.button} title="Confirm" color={Colors.primary} onPress={confirmInputHandler}/>
            <Button style={styles.button} title="Reset" color={Colors.accent} onPress={resetHandler} />
        </View>
        </Card>
        {confirmedOutput}
      </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: "center",
        padding: 10

    },
    splText: {
        fontSize: 20,
        marginVertical: 20
    },
    inputContainer: {
        width: "80%",
        alignItems: "center",
       
    },
    input: {
        width: 40,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: "10%"
    },
    button: {
        width: '120'
    },
    outputContainer: {
        marginTop: 20,
        alignItems: 'center'
    }



})

export default StartGame;

