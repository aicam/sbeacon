import React, {Component} from 'react';
import {
    View,
    Image,
    ImageBackground,
    AsyncStorage,
    Alert,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

export default class Confirm_User extends Component {
    constructor() {
        super();
        this.state = {
            phonenumber: "",
            name: "",
            family_name: "",
            user: "",
            reagent: "",
            sex: 0
        };
    }

    async storeUsername(username) {
        await AsyncStorage.setItem('username', username);
    }

    async saveBcoin(Bcoin) {
        await AsyncStorage.setItem('username', Bcoin);
    }

    _set_states(phonenumber, sex) {
        this.setState({'phonenumber': phonenumber, 'sex': sex});
    }

    componentDidMount() {

        const {navigation} = this.props;
        const phone = navigation.getParam('phone', 'error');
        this._set_states(phone, this.props.sex)
    }

    _submitData() {
        console.log(this.state.user);
        console.log(this.state.phonenumber);
        this.storeUsername(this.state.user);
        this.saveBcoin(0);
        let page_url = "http://parsbeacon.ir/requests/register" +
            "?phonenumber=" + this.state.phonenumber + "&name=" + this.state.name + "." + this.state.family_name +
            "&username=" + this.state.user + "&sex=" + this.state.sex + "&reagent=" + this.state.reagent;
        fetch(page_url)
            .then((response) => response.json())
            .then((responseJson) => {

            }, function () {
            }).catch((error) => {
            Alert.alert(error.toString())
        });
        this.props.navigation.navigate('Firstpage');
    }

    _check_username_exist() {
        fetch('http://parsbeacon.ir/requests/check_user_exist?username=' + this.state.user)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.exists) {
                    Alert.alert('این نام کاربری قبلا انتخاب شده');
                } else {
                    this._submitData();
                }
            }, function () {
            }).catch((error) => {
            Alert.alert(error.toString())
        });
    }

    render() {

        return (
            <ImageBackground source={require('../images/register/background_lastpage.png')}
                             style={{width: '100%', height: '100%', justifyContent: 'center'}}>
                <View style={{marginBottom: 60, alignItems: "center", justifyContent: 'center', padding: 20}}>
                    <Image source={require('../images/register/scoin.png')}
                           style={{resizeMode: 'contain', maxWidth: 100, maxHeight: 100, marginBottom: 20}}/>
                    <Input
                        textAlign='right'
                        selectionColor='#B2A37F'
                        placeholderTextColor='#F4B3BD'
                        inputStyle={{color: 'white'}}
                        placeholder='نام'
                        rightIcon={
                            <Icon
                                name='user'
                                size={30}
                                color='white'
                            />
                        }
                        onChangeText={(text) => this.setState({name: text})}
                    />
                    <Input
                        textAlign='right'
                        selectionColor='#B2A37F'
                        placeholderTextColor='#F4B3BD'
                        inputStyle={{color: 'white'}}
                        placeholder='نام خانوادگی'
                        rightIcon={
                            <Icon
                                name='address-book'
                                size={23}
                                color='white'
                            />
                        }
                        onChangeText={(text) => this.setState({family_name: text})}
                    />
                    <Input
                        textAlign='right'
                        selectionColor='#B2A37F'
                        inputStyle={{color: 'white'}}
                        placeholderTextColor='#F4B3BD'
                        placeholder='نام کاربری'
                        rightIcon={
                            <Icon
                                name='address-card'
                                size={24}
                                color='white'
                            />
                        }
                        onChangeText={(text) => this.setState({user: text})}
                    />
                    <Input
                        textAlign='right'
                        selectionColor='#B2A37F'
                        inputStyle={{color: 'white'}}
                        placeholderTextColor='#F4B3BD'
                        style={{}}
                        placeholder='نام کاربری معرف'
                        rightIcon={
                            <Icon
                                name='users'
                                size={24}
                                color='white'
                            />
                        }
                        onChangeText={(text) => this.setState({reagent: text})}
                    />
                    <TouchableOpacity onPress={() => {
                        this._check_username_exist()
                    }}>
                        <Image source={require('../images/register/register_end.png')}
                               style={{width: 300, height: 50, marginTop: 20}}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}