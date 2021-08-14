import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Header = (props) => {
return (<View style={styles.viewStyle}>
    <Text style={styles.textStyle} >{props.title}</Text>
    </View>)   
}
const styles = StyleSheet.create({
    viewStyle: {
        width: "100%",
        paddingTop: 40,
        height: 90,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7287b"
    },
    textStyle: {
        color: "black",
        fontSize: 25
    }
})
export default Header;