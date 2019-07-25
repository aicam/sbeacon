import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Button,
    ImageBackground, AsyncStorage, Alert
} from 'react-native';


export default class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            level: 0,
            scoin: 0,
            name: ''
        }
    }

    async removeusername() {
        try {
            await AsyncStorage.removeItem('username')
        } catch (e) {
            Alert.alert(e.toString());
        }
        Alert.alert("لطفا برنامه را یک بار بسته و دوباره باز کنید")
        this.props.navigation.navigate('startsignup')
    }

    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error.toString());
        }
    }

    async componentDidMount() {
        let user = await this.getUsername();

        fetch('http://parsbeacon.ir/requests/get_profile?username=' + user).then((response) => {
            response.json().then((responsejson) => {
                this.setState({
                    name: responsejson.name,
                    award: responsejson.award,
                    scoin: responsejson.scoin
                })
            })
        }).catch((err) => Alert.alert(err.toString()))
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <ImageBackground source={require('../../images/background_profile.jpg')}
                                     style={{width: '100%', height: '100%'}} resizeMethod='scale'>
                        <ImageBackground source={require('../../images/profile.jpg')}
                                         style={{width: '100%', height: 200, flex: 1, justifyContent: 'center'}}>
                            <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>{this.state.name}</Text>
                        </ImageBackground>

                        <View style={{flex: 4}}>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('webview', {url: 'http://parsbeacon.ir/requests/notification?username=' + this.state.username})}}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-end',
                                borderWidth: 1,
                                paddingBottom: 20,
                                paddingTop: 20
                            }}>
                                <Text style={{
                                    fontSize: 25,
                                    flex: 1,
                                    marginRight: 20,
                                    textAlign: 'right',
                                    color: '#392613'
                                }}>اعلان ها</Text>
                                <Image source={require('../../images/logos/notifs.png')}
                                       style={{width: 40, height: 40}}/>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('webview', {url: 'http://parsbeacon.ir/requests/Turnover?username=' + this.state.username})
                            }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-end',
                                paddingBottom: 20,
                                borderWidth: 1
                            }}>
                                <Text style={{
                                    fontSize: 25,
                                    flex: 1,
                                    marginRight: 20,
                                    textAlign: 'right',
                                    color: '#392613',
                                    marginTop: 20
                                }}>گردش مالی</Text>
                                <Image source={require('../../images/logos/records.png')}
                                       style={{width: 40, height: 40}}/>
                            </View>
                            </TouchableOpacity>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                paddingBottom: 20,
                                borderTopWidth: 1,
                                borderBottomWidth: 1
                            }}>
                                <Text style={{fontSize: 25, marginLeft: 10}}>{this.state.level}</Text>
                                <Text style={{
                                    fontSize: 25,
                                    flex: 1,
                                    marginRight: 25,
                                    textAlign: 'right',
                                    color: '#392613',
                                    marginTop: 20
                                    , fontFamily: 'IRANSansMobile'
                                }}>سطح</Text>
                                <Image source={require('../../images/logos/level.png')}
                                       style={{width: 35, height: 35, marginRight: 5}}/>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Invitation')}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-end',
                                    paddingBottom: 20,
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1
                                }}>
                                    <Text style={{
                                        fontSize: 25,
                                        flex: 1,
                                        marginRight: 22,
                                        textAlign: 'right',
                                        color: '#392613',
                                        marginTop: 20, fontFamily: 'IRANSansMobile'
                                    }}>دعوت دوستان</Text>
                                    <Image source={require('../../images/logos/megaphone.png')}
                                           style={{width: 35, height: 35, marginRight: 8}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EventsStatus')}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-end',
                                    paddingBottom: 20,
                                    borderTopWidth: 1,
                                    borderBottomWidth: 1
                                }}>
                                    <Text style={{
                                        fontSize: 25,
                                        flex: 1,
                                        marginRight: 22,
                                        textAlign: 'right',
                                        color: '#392613',
                                        marginTop: 20, fontFamily: 'IRANSansMobile'
                                    }}>وضعیت مسابقات</Text>
                                    <Image source={require('../../images/logos/cup.png')}
                                           style={{width: 35, height: 35, marginRight: 8}}/>
                                </View>
                            </TouchableOpacity>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                paddingBottom: 20,
                                borderTopWidth: 1
                            }}>
                                <Text style={{fontSize: 25, marginLeft: 10}}>{this.state.scoin}</Text>
                                <Text style={{
                                    fontSize: 25,
                                    flex: 1,
                                    marginRight: 23,
                                    textAlign: 'right',
                                    color: '#392613',
                                    marginTop: 20, fontFamily: 'IRANSansMobile'
                                }}>کوین</Text>
                                <Image source={require('../../images/scoin.png')}
                                       style={{width: 35, height: 35, marginRight: 7}}/>
                            </View>


                            <View style={{flexDirection: 'row'}}>

                                <View style={{
                                    alignItems: 'center',
                                    flex: 1,
                                    flexDirection: 'column',
                                    borderWidth: 1,
                                    borderColor: '#e0ebeb'
                                }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('webview', {url: 'http://beacongameserver.ir/support/'})}>
                                    <Image source={require('../../images/logos/support.png')}
                                           style={{height: 50, width: 50, marginTop: 10}}/>
                                    <Text style={{
                                        fontSize: 20,
                                        color: '#85adad',
                                        textAlign: 'center',
                                        fontFamily: 'IRANSansMobile'
                                    }}>پشتیبانی</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('webview', {url: 'http://beacongameserver.ir/aboutus/AU.html'})}
                                    style={{alignItems: 'center',
                                        justifyContent:'center',
                                        flexDirection: 'column',
                                        borderWidth: 1,
                                        borderColor: '#e0ebeb'}}>
                                    <Image source={require('../../images/logos/faq.png')}
                                           style={{height: 50, width: 50, opacity: 0.3, marginTop: 10}}/>
                                    <Text style={{
                                        fontSize: 15,
                                        color: '#85adad',
                                        textAlign: 'center',
                                        marginTop: 3,
                                        fontFamily: 'IRANSansMobile'
                                    }}>سوالات
                                        متداول</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    alignItems: 'center',
                                    flex: 1,
                                    flexDirection: 'column',
                                    borderWidth: 1,
                                    borderColor: '#e0ebeb'
                                }}>
                                    <TouchableOpacity onPress={() => this.removeusername()}>
                                        <Image source={require('../../images/logos/logout.png')}
                                               style={{height: 50, width: 50, opacity: 0.2, marginTop: 10}}/>
                                        <Text style={{
                                            fontSize: 20,
                                            color: '#85adad',
                                            textAlign: 'center',
                                            fontFamily: 'IRANSansMobile'
                                        }}
                                        >خروج</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
                {/* footer */}
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    backgroundColor: '#f8f8f8',
                    borderWidth: 0.5,
                    borderColor: "#707070"
                }}>
                    <View style={{flexDirection: 'row', height: 50, backgroundColor: '#f8f8f8', width: '100%'}}>
                        <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('Firstpage')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/home.png')}
                                       style={{height: 24, width: 24, marginTop: 7}}/>
                                <Text style={{fontSize: 10}}>خانه</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('category')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/category.png')}
                                       style={{height: 24, width: 24, marginTop: 7}}/>
                                <Text style={{fontSize: 10}}>دسته بندی</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1}}
                                          onPress={() => this.props.navigation.navigate('miningpage')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/mining.png')}
                                       style={{height: 24, width: 24, marginTop: 7}}/>
                                <Text style={{fontSize: 10}}>حفاری</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1}} onPress={() => this.props.navigation.navigate('profile')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/profile_active.png')}
                                       style={{height: 24, width: 24, marginTop: 7}}/>
                                <Text style={{fontSize: 10}}>پروفایل</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerViews: {
        alignItems: 'center',
        justifyContent: 'center'
    },
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