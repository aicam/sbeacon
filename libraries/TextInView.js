import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native'


export default class TextInView extends Component{

    render(){
        const styles = StyleSheet.create({
            container :{
                backgroundColor : '#f8f8f8',
                flexDirection: 'row',
                flex:1
            },
            textinview :{
                fontFamily : "lalezar",
                paddingTop: 10,
                paddingBottom: 10,
                textAlign: "right"
            }
        });
        return(
            <Text style={[styles.textinview,{fontSize:this.props.fontinsize}]}>{this.props.inputtext}</Text>
        )}
}
