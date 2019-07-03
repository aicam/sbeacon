import React, {Component} from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native'

export default class BestFreesText extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent:'flex-end',marginTop:30}}>
                <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                    <Text style={{fontSize:30,marginLeft:10,fontFamily:'IRANSansMobile'}}>بیشترین تخفیف ها</Text>
                    <Image source={require('../../images/logos/mostoff.png')} style={{width:32,height:32,marginLeft:5,marginRight:5,marginBottom:6}} />
                </View>
            </View>
        );
    }
}