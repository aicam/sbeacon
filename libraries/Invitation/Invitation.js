import React, {Component} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


export default class Invitation extends Component {
    constructor() {
        super();
        this.state = {timer: 0, phoneNumber: '', sentBool: false};
        setInterval(() => (this.setState({timer: this.state.timer + 1})), 1000);
    }

    pressed() {
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
            this.setState({sentBool: true})
        });
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
                        "Mobile": this.state.phoneNumber,
                    }
                ],
                "GroupId": 37320
            }),
        }).then((response) => {
            this.sendsms(this.state.phoneNumber);
        });
    }

    sendsms() {
        const messagetosend = "سلام! دوست شما با نام کاربری:" + ' USERNAME ' + ' شما را به اپلیکیشن Sکوین دعوت کرده است. لینک دانلود اپلیکیشن: ' + "LINK";
        fetch('https://api.sms.ir/users/v1/Message/SendByMobileNumbers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-sms-ir-secure-token': this.state.token,
            },
            body: JSON.stringify({
                "Message": messagetosend,
                "MobileNumbers": [this.state.phoneNumber],
                "CanContinueInCaseOfError": true
            }),
        }).then((response) => {
            response.json().then((message) => {
                if (!message.IsSuccessful) {
                    Alert.alert("مشکلی در ارسال پیامک پیش آمده، لطفا دوباره تلاش کنید.")
                }
            })
        });
    }

    render() {

        return <Input
            placeholder='Ex. 09xxxxxxxxx'
            leftIcon={
                <Icon
                    name='user'
                    size={24}
                    color='black'
                />
            }
        />;
    }
}
