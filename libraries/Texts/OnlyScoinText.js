import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class OnlyScoinText extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent:'space-between',marginTop:20}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('more',{cid : 52})}>
                <Image source={require('../../images/logos/more.png')} style={{width:28,height: 28,marginLeft:5}}/>
                </TouchableOpacity>
                <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                    <Text style={{fontSize:20,fontFamily:'IRANSansMobile',marginBottom:6}}> کوین </Text>
                    <Image source={require('../../images/scoin.png')} style={{width:20,height:20,marginBottom:8,marginRight:4}} />
                    <Text style={{fontSize:25,fontFamily:'IRANSansMobile'}}> فقط با   </Text>
                    <Image source={require('../../images/logos/onlyscion.png')} style={{width:32,height:32}} />
                </View>
            </View>
        );
    }
}