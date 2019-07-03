import React, {Component} from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native'

export default class MostPopularItems extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent:'space-between',marginTop:20}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('more',{cid : 5})}>
                <Image source={require('../../images/logos/more.png')} style={{width:28,height: 28,marginTop:5,marginLeft:5}}/>
                </TouchableOpacity>
                <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                    <Text style={{fontSize:25,marginLeft:10,fontFamily:'IRANSansMobile'}}>محبوب ترین ها</Text>
                    <Image source={require('../../images/logos/mostpopular.png')} style={{width:28,height:28,marginLeft:5,marginRight:5,marginBottom:6}} />
                </View>
            </View>
        );
    }
}