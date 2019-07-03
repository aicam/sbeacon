import React, {Component} from 'react';
import {
    Text, View, StyleSheet,
    Image, FlatList, ActivityIndicator, ScrollView,
    ImageBackground, TouchableOpacity, Alert, AsyncStorage
} from 'react-native'
import TimerCountdown from "react-native-timer-countdown";
import CountDown from 'react-native-countdown-component';
import {withNavigation} from 'react-navigation';
import NearestScoinText from '../../libraries/Texts/NearestScoinText'
import MostPopularItems from '../../libraries/Texts/MostPopularItems'
import ConnectedSbeaconText from '../../libraries/Texts/ConnectedSbeaconText'
import OnlyScoinText from '../../libraries/Texts/OnlyScoinText'
import BombsText from '../../libraries/Texts/BombsText'
import FreeForYouText from '../../libraries/Texts/FreeForYouText'
import BestFreesText from '../../libraries/Texts/BestFreesText'
import RestaurantText from "../Texts/RestaurantText";
import ProductsText from "../Texts/ProductsText";
import ServicesText from "../Texts/ServicesText";
import CoponText from "../Texts/CoponText";
import Slider from "../Slider"

export default class CompleteHomePage extends Component {
    constructor() {
        super();
        this.state = {
            level: 0,
            username: "",
            nearest_data: null,
            nearest_loaded: false,
            daily_suggestion_data: null,
            daily_suggestion_loaded: false,
            most_popular_data: null,
            most_popular_loaded: false,
            bomb_data: null,
            bomb_loaded: false,
            free_suggestion_data: null,
            free_suggestion_loaded: false,
            restuarant_data: null,
            restuarant_loaded: false,
            product_data: null,
            product_loaded: false,
            services_data: null,
            services_loaded: false,
            just_scoin_data: null,
            just_scoin_loaded: false,
            copen_data: null,
            copen_loaded: false,
            notification_view: false,
            notification_title: "",
            notification_text: ""
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

    async componentWillMount() {


    }

    async componentDidMount() {
        const username = await this.getUsername();
        const page_url = "http://parsbeacon.ir/requests/userData?username=" + username;
        fetch(page_url)
            .then((response) => response.json()
            .then((responseJson) => {
                this.setState({
                    level: responseJson.level
                })
            }, function () {
            }).catch((error) => {Alert.alert(error)})
            ).catch((error) => {
            Alert.alert(error)
        });
        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetch('http://parsbeacon.ir/requests/location?long=' + position.longitude + '&lat=' + position.latitude)
                    .then((response) =>
                        response.json().then((datas) => {
                                this.setState({
                                    nearest_data: datas.nearest,
                                    nearest_load: true
                                })
                            },function () {
                        }).catch((error) => {
                            Alert.alert(error)
                        }
                        )
                    ).catch((error) => {Alert.alert(error)})
            },
            (err) => Alert.alert(err),
            {enableHighAccuracy: false, timeout: 8000, maximumAge: 10000}
        );
        fetch('http://parsbeacon.ir/requests/homepage?userID').then((response) => {
            response.json().then((jsondata) => {
                this.setState({
                    daily_suggestion_data: jsondata.dailysuggestions,
                    daily_suggestion_loaded: true,
                    most_popular_data: jsondata.most_popular,
                    most_popular_loaded: true,
                    bomb_data: jsondata.bomb,
                    bomb_loaded: true,
                    free_suggestion_data: jsondata.freesuggestions,
                    free_suggestion_loaded: true,
                    restuarant_data: jsondata.restuarant,
                    restuarant_loaded: true,
                    product_data: jsondata.product,
                    product_loaded: true,
                    services_data: jsondata.services,
                    services_loaded: true,
                    just_scoin_data: jsondata.just_scoin,
                    just_scoin_loaded: true,
                    copen_data: jsondata.copen,
                    copen_loaded: true,
                    notification_view: jsondata.notif_check,
                    notification_title: jsondata.notif_title,
                    notification_text: jsondata.notif_text
                });
            },function () {
            }).catch((error) => {
                Alert.alert(error)
            });
        }).catch((error) => {Alert.alert(error)})
    }

    render() {
        return (
            <View>
                {this.state.notification_view == 1 &&
                    <View style={{height:150,width:'100%',backgroundColor: '#ccccb3'}}>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{fontSize: 15,marginTop:20,fontFamily:'IRANSansMobile',marginRight:10}}
                              onPress={() => {this.setState({notification_view : 0})}}
                        >بستن[X]</Text>
                    </View>
                    <View style={{width: '100%',alignItems:'center',justifyContent:'center',paddingBottom:15}}>
                        <Text style={{fontSize: 22, marginTop: 10,color:'#476b6b',fontFamily:'IRANSansMobile'}}>{this.state.notification_title}</Text>
                        <Text style={{fontSize: 18, marginTop: 30,fontFamily:'IRANSansMobile'}}>{this.state.notification_text}</Text>
                    </View>
                    </View>
                }
                <View style={{marginTop: 20, marginBottom: 30, borderColor: '#919191', borderBottomWidth: 4}}>
                    <ScrollView
                        horizontal={true}
                    >
                        {this.state.daily_suggestion_loaded &&
                        this.state.daily_suggestion_data.map((item) =>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('adinfo', {ad_id: item.id})}>
                                <ImageBackground key={item.id} source={{uri: item.pic}} style={{
                                    marginRight: 20,
                                    resizeMode: 'contain',
                                    height: 100,
                                    width: 160,
                                    borderRadius: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    <Text>{item.title}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        )}
                        {!this.state.daily_suggestion_loaded &&
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <ActivityIndicator/>
                        </View>
                        }
                    </ScrollView>
                </View>


                <MostPopularItems navigation={this.props.navigation}/>
                {/* most_popular */}
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                    {this.state.most_popular_loaded &&
                        <Slider data={this.state.most_popular_data} sliderWidth={300} sliderHeight={250} navigation={this.props.navigation} />
                    }
                {/* most_popular */}

                {/* only_scoin */}
                <OnlyScoinText navigation={this.props.navigation}/>
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}} >
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                {this.state.most_popular_loaded &&
                    <Slider data={this.state.just_scoin_data} sliderWidth={300} sliderHeight={250} navigation={this.props.navigation} />
                }
                {/* only_scoin */}


                {/* bombs */}
                <BombsText navigation={this.props.navigation}/>
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                {this.state.most_popular_loaded &&
                    <Slider data={this.state.bomb_data} sliderWidth={300} sliderHeight={250} navigation={this.props.navigation} />
                }
                {/* bombs */}

                {/* freeforyou */}
                <FreeForYouText navigation={this.props.navigation}/>
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                {this.state.most_popular_loaded &&
                    <Slider data={this.state.free_suggestion_data} sliderWidth={250} sliderHeight={200} navigation={this.props.navigation} />
                }
                {/* freeforyou */}

                <BestFreesText/>

                {/* restaurant */}
                <RestaurantText navigation={this.props.navigation}/>
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                    {this.state.most_popular_loaded &&
                        <Slider data={this.state.restuarant_data} sliderWidth={200} sliderHeight={150} navigation={this.props.navigation} />
                    }
                {/* restuarant */}

                {/* products */}
                <ProductsText navigation={this.props.navigation}/>
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                {this.state.most_popular_loaded &&
                    <Slider data={this.state.product_data} sliderWidth={200} sliderHeight={150} navigation={this.props.navigation} />
                }
                {/* products */}

                {/* services */}
                <ServicesText navigation={this.props.navigation}/>
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                {this.state.most_popular_loaded &&
                    <Slider data={this.state.services_data} sliderWidth={200} sliderHeight={150} navigation={this.props.navigation} />
                }
                {/* services */}

                {/* Copon */}
                <CoponText navigation={this.props.navigation}/>
                <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                    {!this.state.most_popular_loaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                </View>
                {this.state.most_popular_loaded &&
                    <Slider data={this.state.copen_data} sliderWidth={200} sliderHeight={150} navigation={this.props.navigation} />
                }
                {/* Copon */}

            </View>
        );
    }
}