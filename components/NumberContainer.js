import { color } from "jimp";
import React from "react";
import {Text,StyleSheet,View} from 'react-native'
import Colors from '../constants/colors'

const NumberContainer = (props) => {

    return(
        <View style={styles.container}>
            <Text style={styles.number}>
            {props.children}
            </Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create(
 {
    number: {
        fontSize: 30,
        color: Colors.accent
    },
    container: {
        padding : 10,
        marginVertical : 10,
        borderColor: Colors.accent,
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
 }   
)