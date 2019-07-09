import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default class OnlyScoinText extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent:'space-between',marginTop:20}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('more',{cid : 52})}>
                <Image source={require('../../images/logos/more.png')} style={{width:28,height: 28,marginLeft:5}}/>
                </TouchableOpacity>
                <View style={{alignItems:"flex-end",justifyContent:"center",flexDirection: 'row'}}>
                    <Text style={{fontSize:20,fontFamily:'IRANSansMobile'}}> کوین </Text>
                    <Image source={require('../../images/scoin.png')} style={{width:35,height:35.2,marginRight:5}} />
                    <Text style={{fontSize:25,fontFamily:'IRANSansMobile'}}> فقط با</Text>
                    <Image source={require('../../images/logos/onlyscion.png')} style={{width:32,height:32}} />
                </View>
            </View>
        );
    }
}