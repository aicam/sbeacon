import React, {Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'

export default class NearestScoinText extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Image source={require('../../images/logos/more.png')} style={{width:28,height: 28,marginTop:5,marginLeft:5}}/>
                <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                    <Text style={{fontSize:20,marginRight:5,marginBottom:4,fontFamily:'IRANSansMobile'}}>کوین ها</Text>
                    <Image source={require('../../images/scoin.png')} style={{marginBottom:5,width:20,height:20}} />
                    <Text style={{fontSize:25,marginLeft:10,fontFamily:'IRANSansMobile'}}>نزدیک ترین</Text>
                    <Image source={require('../../images/logos/location.png')} style={{width:32,height:32,marginLeft:5,marginRight:5,marginBottom:3}} />
                </View>
            </View>
        );
    }
}