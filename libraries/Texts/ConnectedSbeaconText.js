import React, {Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'

export default class ConnectedSbeaconText extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent:'space-between',marginTop:20}}>
                <Image source={require('../../images/logos/more.png')} style={{width:28,height: 28,marginTop:5,marginLeft:5}}/>
                <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                    <Text style={{fontSize:25,marginLeft:10,fontFamily:'IRANSansMobile'}}>بیکن های متصل</Text>
                    <Image source={require('../../images/logos/Sbeacon.png')} style={{width:32,height:32,marginLeft:5,marginRight:5,marginBottom:10}} />
                    <Image source={require('../../images/logos/connectedSbeacon.png')} style={{width:32,height:32,marginLeft:5,marginRight:5,marginBottom:6}} />
                </View>
            </View>
        );
    }
}