import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, AsyncStorage, Alert, TouchableOpacity} from 'react-native'
import FadeInView from './FadeInView'


let username = "";
let goHomepage = false;
export default class Sexselection extends Component {
    render() {
        const {navigation} = this.props;
        const phone = navigation.getParam('phone', 'error');
        console.log(phone)
        if (phone == 'error') {
            Alert.alert("مشکلی در اجرای برنامه رخ داده ، لطفا برنامه را دوباره باز کنید")
        }
        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                <ImageBackground source={require('../images/register/header.png')} style={{height:180,width:440,resizeMethod: 'scale'}}/>

                    <FadeInView>
                        <View style={{marginBottom: 200, justifyContent:'space-between',flexDirection:'row'}}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('confirm_data', {phone: phone, sex: 0})}>
                            <Image source={require('../images/register/man.jpg')} style={{width:120,height:120,marginRight:20}}/>
                        </TouchableOpacity>
                        <View style={{height:75,width:10,backgroundColor:'#5DC7FD',borderRadius:50}}/>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('confirm_data', {phone: phone, sex: 1});
                        }}>
                            <Image source={require('../images/register/woman.jpg')} style={{width:120,height:120,marginLeft:20}}/>
                        </TouchableOpacity>
                        </View>
                    </FadeInView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    textinview: {
        fontSize: 30,
        fontFamily: "traffic",
        alignItems: "center",
        justifyContent: 'center'
    }
});