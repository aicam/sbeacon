/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, View, List, ListItem, FlatList,PermissionsAndroid,
    ScrollView,
    NativeAppEventEmitter,
    NativeEventEmitter,
    NativeModules,
    Navigator,
    AppRegistry,
    Alert,
    Button,
    ImageBackground,
    AsyncStorage,
    Image,
    AppState, TextInput,
    TouchableOpacity
} from 'react-native';
import Header from "./libraries/Header";
import Listinview from "./libraries/Listinview";
import StartPage from "./libraries/StartPage"
import GetPhonenumber from "./libraries/GetPhonenumber"
import Sexselection from "./libraries/Sexselection"
import VerificationPage from './libraries/VerificationPage'
import Confirm_User from './libraries/Confirm_User'
import CompleteMenue from './libraries/CategoryPage/CompeleteMenue'
import UserProfile from './libraries/Profile/UserProfile'
import MiningPage from './libraries/MiningPage/MiningPage'
import CategoryADs from './libraries/CategoryADs'
import CompleteHomePage from './libraries/HomePage/CompleteHomePage'
import More from './libraries/More'
import ADinfo from './libraries/ADinfo'
import Webview from './libraries/Webview'
import Search from './libraries/Search'
import Firstheader from './libraries/First_header'
import { createStackNavigator, createAppContainer } from "react-navigation";

//var PushNotification = require('react-native-push-notification');
type Props = {};
let user = "";
let Bcoin = 0;
let name = "";
let phonenumber = "";
let level = "";
//rest of code will be performing for iOS on background too

class StartSignUp extends React.Component{
    static navigationOptions = {
        headerLeft: null,
        header: null
    };
    render() {
        return (
            <StartPage navigation={this.props.navigation}/>
        );
    }
}
class Verify extends React.Component{
    static navigationOptions = {
        headerLeft: null,
        header: null
    };
    render() {
        const { navigation } = this.props;
        const phonenumber = navigation.getParam('phone', '1');
        return (
            <VerificationPage navigation={this.props.navigation} phonenumber={phonenumber}/>
        );
    }
}
class SelectSex extends React.Component{
    static navigationOptions = {
        headerLeft: null,
        header: null
    };
    render() {
        return (
            <Sexselection navigation={this.props.navigation}/>
        );
    }
}
class ConfirmData extends React.Component{
    static navigationOptions = {
        headerLeft: null,
        header: null
    };
    render(){
        const { navigation } = this.props;
        const sex = navigation.getParam('sex', '1');
        const phonenumber = navigation.getParam('phone', '1');
        return (
            <Confirm_User navigation={this.props.navigation} phone={phonenumber} sex={sex}/>
        );
    }
}

class PhonePage extends React.Component{
    static navigationOptions = {
        headerLeft: null,
        header:null
    };
    render(): React.ReactNode {
        return (
            <GetPhonenumber navigation={this.props.navigation}/>
        );
    }
}
// Start App

class WebViewPage extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('url', '1');
        return (
            <Webview url={itemId} navigation={this.props.navigation}/>
        );
    }
}
class AdvertisementData extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('ad_id', '1');
        console.log(itemId + " adver");
        return (
            <ADinfo ad_id = {itemId} navigation={this.props.navigation}/>
        );
    }
}
class MoreData extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('cid', '5');
        console.log(itemId + " cid");
        return (
            <More cid={itemId} navigation={this.props.navigation} />
        );
    }
}
class SearchData extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('indexstr', '5');
        return (
            <Search indexstr = {itemId} navigation={this.props.navigation}/>
        );
    }
}
class Profile extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render() {
        return (
            <UserProfile navigation={this.props.navigation}/>
        );
    }
}
class Mining extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render() {
        return (
            <MiningPage navigation={this.props.navigation}/>
        );
    }
}
class CategoryAD extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render()  {
        const { navigation } = this.props;
        const itemId = navigation.getParam('category_ID', '5');
        console.log(itemId + "cid");
        return (
            <CategoryADs cid2 = {itemId} navigation={this.props.navigation} />
        );
    }
}
class Categories extends React.Component{
    constructor(){
        super();
        this.state={
            search_text : ""
        }
    }
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView>
                        <View style={{height:50,flexDirection:'row',marginTop:20,justifyContent:'flex-end'}}>
                            <TextInput style={{fontSize:25,textAlign:'center',marginRight:20}} placeholder="جستوجو..."
                                       onChangeText={(text) => {this.setState({search_text : text})}}/>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('searchdata',{'indexstr' : this.state.search_text})}>
                            <Image source={require('./images/logos/search.png')} style={{resizeMode:'contain',maxHeight:50,maxWidth:50}} />
                            </TouchableOpacity>
                        </View>
                    <CompleteMenue navigation={this.props.navigation}/>
                </ScrollView>
                <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',borderWidth:0.5,borderColor:"#707070"}}>
                    <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',marginLeft: 28,width:'100%'}}>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('Firstpage')}>
                            <Image source={require('./images/Footer/home.png')} style={{height:30,width:30,marginTop:7}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('category')}>
                            <Image source={require('./images/Footer/category_active.png')} style={{height:30,width:30,marginTop:7}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('miningpage')}>
                            <Image source={require('./images/Footer/mining.png')} style={{height:33,width:33,marginTop:7}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('profile')}>
                            <Image source={require('./images/Footer/profile.png')} style={{height:30,width:30,marginTop:7}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
class FirstPage extends React.Component{

    componentDidMount(){
        fetch('http://192.168.1.103/requests/homepage?userID=' + user).then((response) => {
            response.json().then((jsondata) => {
                this.setState({
                    fetcheddata : jsondata.restaurant,
                    loaded : true
                });
            })
        })
    }

    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error);
        }
    }
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Header navigation={navigation}/>,
            headerLeft: null
        }
    };
    async componentWillMount(){
        const username = await this.getUsername();
        console.log(username);
    }

    render(){
            return (
                    <View style={{flex:3,flexDirection: 'column'}}>
                    <ScrollView>
                        <CompleteHomePage navigation={this.props.navigation} />
                    </ScrollView>
                        <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',borderWidth:0.5,borderColor:"#707070"}}>
                            <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',marginLeft: 28,width:'100%'}}>
                            <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('Firstpage')}>
                                <Image source={require('./images/Footer/home_active.png')} style={{height:30,width:30,marginTop:7}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('category')}>
                                <Image source={require('./images/Footer/category.png')} style={{height:30,width:30,marginTop:7}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('miningpage')}>
                                <Image source={require('./images/Footer/mining.png')} style={{height:33,width:33,marginTop:7}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('profile')}>
                                <Image source={require('./images/Footer/profile.png')} style={{height:30,width:30,marginTop:7}} />
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
        );
    }

}

class Mainpage extends React.Component{
    render() {
        return (
            <View>
                <Header/>
                <Listinview/>
            </View>
        );
    }
}


const AppNavigator = createStackNavigator({
        Firstpage : FirstPage,
        startsignup : StartSignUp,
        phonepage : PhonePage,
        verificationpage : Verify,
        select_sex : SelectSex,
        confirm_data : ConfirmData,
        category : Categories,
        profile : Profile,
        miningpage : Mining,
        categoryads : CategoryAD,
        adinfo : AdvertisementData,
        more : MoreData,
        webview : WebViewPage,
        searchdata : SearchData,
    }, {
        initialRouteName: 'startsignup',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f8f8f8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component<Props> {
    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error);
        }
    }
    constructor(props) {
        super();
        this.state = {
            peripherals: new Map(),
            title : "hello",
            isPageOnLoading : true,
            scanning : true,
            notifID : null,

        };
    }
    async componentWillMount(){
        console.log(level)
    }

    componentDidMount() {
        this.setState({isPageOnLoading : false});
//            fetch('http://parsbeacon.ir/requests/getNotif?username=')
//                .then((response) => response.json()
//                    .then((responseJson) => {
//                        if(responseJson.startnotif == true){
//                            PushNotification.localNotification({
//                                title: responseJson.title,
//                                message: responseJson.message,
//                        });
//                        }
//                    }, function () {
//                    }).catch((error) => {Alert.alert(error)})
//                ).catch((error) => {
//                Alert.alert(error)
//            });
    }


    render() {
        return <AppContainer />;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    scroll: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        margin: 10,
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
