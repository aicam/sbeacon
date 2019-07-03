import React, {Component} from 'react';
import {Text,View,StyleSheet,
    Image,FlatList, ActivityIndicator,ScrollView,ImageBackground} from 'react-native'
import { withNavigation } from 'react-navigation';
export default class ConnectedSbeacon extends Component{
    render() {
        return (
            <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                <ScrollView
                    horizontal={true}
                >
                    {this.props.peripherals != null &&
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>}
                    {this.props.peripherals == null &&
                    <View style={{width:200,height:150,alignItems:'center',justifyContent:'center'}} >
                        <Text style={{fontSize:20,alignItems:'center',justifyContent:'center'}}>هیچ بیکن متصل نمی باشد</Text>
                    </View>
                    }
                </ScrollView>
            </View>
        );
    }
}