import React, {Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'

export default class Footer extends Component{
    render(){
        return(
            <View style = {styles.container}>

            </View>
        )}
}
const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        height : 40,
        marginBottom : 0
    },
    transfer :{
        marginLeft : 10
    },
    level :{
        marginLeft: 10
    },
    alert :{
        marginRight:10
    },
    rightview: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex:1,
    },
    centerview: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex:1
    },
    leftview :{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex:1
    }
});