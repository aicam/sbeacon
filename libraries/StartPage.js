import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, AsyncStorage, Alert,TouchableOpacity,ScrollView} from 'react-native'
import FadeInView from './FadeInView'

let username = "";
let goHomepage = false;
export default class StartPage extends Component{

    constructor(){
        super();

    }
    async storeUsername(username) {
        await AsyncStorage.setItem('username', username);
    }
    async removeusername(){
        try {
            await AsyncStorage.removeItem('username')
        }catch (e) {
            Alert.alert(e);
        }
    }
    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error);
        }
    }
    async _Check(username){
        const user = await this.getUsername();
        if(typeof(user) != "string" || user == null) {
            return 0;
        }
        return user;
    }
    async componentWillMount(){
        let us = await this._Check();
        if(us != 0){
            this.props.navigation.navigate('Firstpage');
            username = us;
            goHomepage = true;
        }
    }

    render() {
        return (
            <ScrollView>
            <View style={{flex:1,alignItems: 'center'}}>
                <ImageBackground source={require('../images/register/header.png')} style={{height:120,width:'100%',resizeMethod: 'scale'}}/>
                <Image source={require('../images/register/scoin.png')} style={{marginTop:20,resizeMode: 'contain',maxWidth:200,maxHeight:200}}/>
                <FadeInView>
                <View style={{marginTop:120}}>
                <TouchableOpacity onPress={() => {
                    if(goHomepage){this.props.navigation.navigate('Firstpage',{user : username})}else {
                        this.props.navigation.navigate('phonepage');
                    }}}>
                    <Image source={require('../images/register/register.png')} style={{width:300,height:50,overflow:'hidden',borderRadius:20}}/>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => {
                    if(goHomepage){this.props.navigation.navigate('Firstpage',{user : username})}else {
                        this.props.navigation.navigate('phonepage');
                    }}}>
                    <Image source={require('../images/register/login.png')} style={{marginTop:20,width:300,height:50,overflow:'hidden',borderRadius:20}}/>
                </TouchableOpacity>
                </View>
                </FadeInView>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    textinview : {
        fontSize : 30,
        fontFamily : "traffic",
        alignItems: "center",
        justifyContent: 'center'
    }
});