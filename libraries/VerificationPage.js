import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput,
    Alert,
    AsyncStorage,
    TouchableOpacity
} from 'react-native'
import FadeInView from './FadeInView'

import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Button} from "react-native-elements";

export default class VerificationPage extends Component {
    async storeUsername(username) {
        await AsyncStorage.setItem('username', username);
    }

    async saveBcoin(Bcoin) {
        await AsyncStorage.setItem('username', Bcoin);
    }

    static navigationOptions = {
        headerMode: null
    };

    constructor() {
        super();
        this.state = {
            token: "",
            res: null,
            phonenumber: 1,
            verificationcode: 1,
            verify: 2,
            name: "",
            Bcoin: 0,
            username: "",
            registered: false,
            start_transfer: false
        };
    }

    componentDidMount() {
        const {navigation} = this.props;
        const phonenumberconst = this.props.phonenumber;
        this._set_phonenumber(phonenumberconst);
        console.log(this.state.phonenumber + "cc");
        fetch('https://api.sms.ir/users/v1/Token/GetToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "UserApiKey": "824886d191ce42937e1cd2aa",
                "SecretKey": "*$fy7!$T2N&k@3i"
            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson);
            this.setState({res: responseJson, token: responseJson.TokenKey});
            this.addcontact();
        });
    }

    _set_phonenumber(phone) {
        this.setState({'phonenumber': phone})
    }

    addcontact() {
        fetch('https://api.sms.ir/users/v1/Contacts/AddContacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-sms-ir-secure-token': this.state.token,
            },
            body: JSON.stringify({
                "ContactsDetails": [
                    {
                        "Mobile": this.state.phonenumber,
                    }
                ],
                "GroupId": 37320
            }),
        }).then((response) => {
            this.sendsms(this.state.phonenumber);
        });
    }

    sendsms() {
        const RandomNumber = Math.floor(Math.random() * 10000) + 1000;
        console.log(RandomNumber);
        this.setState({verify: RandomNumber});
        const messagetosend = "به Sکوین خوش آمدید.کد فعالسازی :  " + RandomNumber;
        fetch('https://api.sms.ir/users/v1/Message/SendByMobileNumbers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-sms-ir-secure-token': this.state.token,
            },
            body: JSON.stringify({
                "Message": messagetosend,
                "MobileNumbers": [this.state.phonenumber],
                "CanContinueInCaseOfError": true
            }),
        }).then((response) => {
            response.json().then((message) => {
                if (!message.IsSuccessful) {
                    Alert.alert("مشکلی در ارسال پیامک پیش آمده، لطفا تمامی فیلد ها را با حروف انگلیسی پر کنید.")
                }
            })
        });
    }

    _check_registered() {
        let page_url = 'http://parsbeacon.ir/requests/check_registered?phonenumber=' + this.state.phonenumber;
        fetch(page_url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.registered);
                if (responseJson.registered) {
                    this.storeUsername(responseJson.username);
                    console.log("registered");
                    this.props.navigation.navigate('Firstpage', {
                        Bcoin: this.state.Bcoin,
                        username: this.state.username,
                        name: this.state.name
                    });
                } else {
                    console.log("not registered");
                    this.props.navigation.navigate('select_sex', {phone: this.state.phonenumber});
                }

            }, function () {
            }).catch((error) => {
            Alert.alert(error.toString())
        });
    }

    render() {
        if (this.state.transfer) {
            return (
                <ImageBackground source={require('../images/phonenumber.png')} style={{
                    width: '100%', height: '100%', alignItems: "center",
                    justifyContent: 'center', textAlign: "center"
                }}>
                    <Text>برنامه در حال دریافت اطلاعات شما میباشد</Text>
                </ImageBackground>
            );
        }
        return (
            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                <ImageBackground source={require('../images/register/header.png')}
                                 style={{height: 120, width: '100%', resizeMethod: 'scale'}}/>
                <View style={{marginBottom: 50, alignItems: 'center'}}>
                    <TextInput
                        style={{height: 100, fontSize: 25, marginBottom: 30, textAlign: 'center', width: 200}}
                        placeholder="Activation Code"
                        onChangeText={(text) => this.setState({verificationcode: text})}
                    />
                    <Button onPress={() => {
                        if (this.state.verificationcode == this.state.verify) {
                            this._check_registered();
                        } else {
                            Alert.alert('کد وارد شده صحیح نمیباشد')
                        }
                    }}
                            titleStyle={{fontSize: 25, fontFamily: 'IRANSansMobile'}}
                            buttonStyle={{height: 60, width: 200, backgroundColor: '#5CC3FE',borderRadius:20,overflow:'hidden'}}
                            title="تـأیید"
                    />
                </View>
                <Image source={require('../images/register/sms.png')}
                       style={{resizeMode: 'contain', maxWidth: 169, maxHeight: 169, marginBottom: 110}}/>
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