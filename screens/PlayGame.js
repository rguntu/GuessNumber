
import React, {useState,useRef,useEffect} from 'react';
import {Text,View,StyleSheet, Button, Alert} from 'react-native';
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";


const generateRandomNumberBetween = (min,max, exclude) => {
    min = Math.floor(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max - min))+ min;
    if(rndNum === exclude) {
        return generateRandomNumberBetween(min,max,exclude);
    }
    return rndNum;
}

const GameScreen = (props) => {
    const [numberGuessed,setNumberGuessed] = useState(generateRandomNumberBetween(1,100,props.userInput));
    const [gameRounds,setGameRounds] = useState(0)
    const minRef = useRef(1);
    const maxRef = useRef(100);
    const{gameOverHandler,userInput} = props;
    useEffect(()=>{
        if(numberGuessed === userInput) {
            gameOverHandler(gameRounds)
        }
    },[numberGuessed,gameOverHandler,userInput]);
    const nextGuessHandler = (hint) => {
        if((hint === 'lower' && props.userInput > numberGuessed) || 
        (hint === 'higher' && props.userInput < numberGuessed)) {
            Alert.alert("Don\'t lie !!!","Incorrect Hint",[{text: "Sorry...",style:"cancel"}])
            return;
        }
        if(hint === 'lower') {
            maxRef.current = numberGuessed;
        } else {
            minRef.current = numberGuessed;
        }
        const nextRndNum = generateRandomNumberBetween(minRef.current,maxRef.current,numberGuessed)
        setGameRounds(gameRounds_ => {return gameRounds_+1} )
        setNumberGuessed(nextRndNum)
    }
    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer style={styles.number}>{numberGuessed}</NumberContainer>
            <Card style={styles.card}>
                {/* <Button title="LOWER" onPress={nextGuessHandler.bind(this,"lower")}></Button>
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this,"higher")}></Button> */}
                <Button title="LOWER" onPress={() => nextGuessHandler("lower")}></Button>
                <Button title="HIGHER" onPress={() => nextGuessHandler("higher")}></Button>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    }

})

export default GameScreen;