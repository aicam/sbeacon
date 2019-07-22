import * as React from 'react';
import {
    TextInput,
    Text,
    View,
    StyleSheet,
    WebView,
    ImageBackground,
    Animated,
    TouchableOpacity,
    ScrollView,
    Image,
    AsyncStorage, Alert
} from 'react-native';

export default class App extends React.Component {
    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error.toString());
        }
    }
    constructor(){
        super();
        this.state = {
            phonenumber : "",
            token : "",
            username : ""
        }
    }
    async send() {
        const username = await this.getUsername();
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
            this.setState({token : responseJson.TokenKey});
            this.addcontact();
        });
    }

    addcontact (){
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
            this.sendsms();
        });
    }
    sendsms(){
        const messagetosend = "شما توسط کاربر " + username + "به نرم افزار اسکوین دعوت شده اید ، با ثبت نام با نام کاربری دوست خود جایزه بگیرید";
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
            console.log(response)
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView>
                    <Text style={{fontSize:30,textAlign: 'center',paddingBottom:30}}>شماره تلفن همراه دوست خود را وارد کنید و پس از ثبت نام او 100 اسکوین جایزه بگیرید</Text>
                    <TextInput
                        style={{height: 100,fontSize:30}}
                        placeholder="example : 09128888888"
                        onChangeText={(text) => {this.setState({phonenumber : text});}}
                    />
                    <Text style={{fontSize:20,textAlign:'center'}} onPress={() => this.send()}>ثبت</Text>
                </ScrollView>
                <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',borderWidth:0.5,borderColor:"#707070"}}>
                    <TouchableOpacity style={{flex:1,marginLeft:25}} onPress={() => this.props.navigation.navigate('Firstpage')}>
                        <Image source={require('../../images/Footer/home.png')} style={{height:30,width:30,marginTop:7}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('category')}>
                        <Image source={require('../../images/Footer/category_active.png')} style={{height:30,width:30,marginTop:7}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('miningpage')}>
                        <Image source={require('../../images/Footer/mining.png')} style={{height:33,width:33,marginTop:7}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('profile')}>
                        <Image source={require('../../images/Footer/profile.png')} style={{height:30,width:30,marginTop:7}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

