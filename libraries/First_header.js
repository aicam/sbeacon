import React, {Component} from 'react';
import {ImageBackground,Image,View} from 'react-native'

export default class First_header extends Component {
    render() {
        return (
            <View style={{resizeMode: 'cover',minWidth:300,minHeight:100,height:'100%',width:'100%',maxHeight:'100%',maxWidth:'100%',backgroundColor:'#5DC7FD'}} />
        );
    }
}