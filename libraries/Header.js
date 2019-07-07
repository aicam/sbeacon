import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, AsyncStorage, Alert,TouchableOpacity} from 'react-native'

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            Scoin : 0,
            level : 0,
            notifs : 0
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
    async componentDidMount() {
        const user = await this.getUsername();
        fetch('http://parsbeacon.ir/requests/userData?userID=' + user).then((response) => {
            response.json().then((jsondata) => {
                this.setState({
                    notifs : jsondata.notification,
                    Scoin : jsondata.Bcoin,
                    level : jsondata.level
                });
            })
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.leftview}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('webview',{url : 'http://parsbeacon.ir/requests/transfer?username=' + this.state.username})}>
                    <Image style={styles.transfer} source={require('../images/transfer.png')}  />
                    </TouchableOpacity>
                    <Image style={styles.level} source={require('../images/level.png')} />
                    <View style={{marginTop: '10%'}}>
                    <Text style={{fontSize:10,marginTop: 8}}>{this.state.level} </Text>
                    </View>
                </View>
                <View style={styles.centerview}>
                    <View style={{marginTop: '15%'}}>
                    <Text style={{}}>{this.state.Scoin} </Text>
                    </View>
                    <Image source={require('../images/scoin.png')} style={{width:28,height:28}}/>
                </View>
                <View style={styles.rightview}>
                    <View style={{marginTop: '15%'}}>
                    <Text style={{fontSize:10}}>{this.state.notifs} </Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('webview',{url : 'http://parsbeacon.ir/requests/notification?username=' + this.state.username})}>
                    <Image style={styles.alert}  source={require('../images/alert.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )}
}
const styles = StyleSheet.create({
    container :{
        marginTop:'5%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: 'row',
        paddingBottom:5
    },
    transfer :{
        marginLeft : 10,
        height: 28,
        width: 35,
    },
    level :{
        height:28,
        width:25,
        marginLeft: 10
    },
    alert :{
        width:28,
        height:28
    },
    rightview: {
        flexDirection: 'row',
        marginLeft:'27%'
    },
    centerview: {
        flexDirection: 'row',
        alignItems:'center',
        marginLeft:'18%'
    },
    leftview :{
        flexDirection: 'row',
        marginLeft: 2

    }
});