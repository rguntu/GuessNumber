import React from 'react';
import { Text,View,StyleSheet, Button } from 'react-native';

const GameOver = (props) => {
    return(<View style={styles.screen}>
        <Text>Game Over</Text>
        <Button title="New Game" onPress={props.newGame} />
    </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
})

export default GameOver;