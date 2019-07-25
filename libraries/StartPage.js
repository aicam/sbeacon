import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    AsyncStorage,
    Alert,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import FadeInView from './FadeInView';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let username = "";
let goHomepage = false;
export default class StartPage extends Component {

    constructor() {
        super();

    }

    async storeUsername(username) {
        await AsyncStorage.setItem('username', username);
    }

    async removeusername() {
        try {
            await AsyncStorage.removeItem('username')
        } catch (e) {
            Alert.alert(e.toString());
        }
    }

    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error.toString());
        }
    }

    async _Check(username) {
        const user = await this.getUsername();
        if (typeof (user) != "string" || user == null) {
            return 0;
        }
        return user;
    }

    async componentWillMount() {
        let us = await this._Check();
        if (us != 0) {
            this.props.navigation.navigate('Firstpage');
            username = us;
            goHomepage = true;
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <ImageBackground source={require('../images/register/header.png')}
                                     style={{height: 120, width: '100%', resizeMethod: 'scale'}}/>
                    <Image source={require('../images/register/scoin.png')}
                           style={{marginTop: 20, resizeMode: 'contain', maxWidth: 200, maxHeight: 200}}/>
                    <FadeInView>
                        <View style={{marginTop: '20%'}}>
                            <Button onPress={() => {
                                if (goHomepage) {
                                    this.props.navigation.navigate('Firstpage', {user: username})
                                } else {
                                    this.props.navigation.navigate('phonepage');
                                }
                            }}
                                    titleStyle={{fontSize: 20, fontFamily: 'IRANSansMobile'}}
                                    buttonStyle={{height: 60, width: 200, backgroundColor: '#7CCFFF',borderRadius:20,overflow:'hidden'}}
                                    title="ثبت نام"
                            />
                            <Button onPress={() => {
                                if (goHomepage) {
                                    this.props.navigation.navigate('Firstpage', {user: username})
                                } else {
                                    this.props.navigation.navigate('phonepage');
                                }
                            }}
                                    titleStyle={{fontSize: 20, fontFamily: 'IRANSansMobile'}}
                                    buttonStyle={{height: 60, width: 200, borderColor: '#007DC4',borderRadius:20,overflow:'hidden',marginTop:10}}
                                    title="ورود"
                                    type="outline"
                            />
                        </View>
                    </FadeInView>
                </View>
            </ScrollView>
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