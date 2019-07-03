import React, {Component} from 'react';
import {Text,View,StyleSheet,
    Image,FlatList, ActivityIndicator,ScrollView,ImageBackground} from 'react-native'
import { withNavigation } from 'react-navigation';
import TimerCountdown from "react-native-timer-countdown";
export default class MostPopular extends Component{
    constructor(props){
        super(props);
        this.props.navigation = props.navigation;
    }

    componentDidMount(){

    }
    render(){

        return(
            //<View style={{flex:3,alignItems: 'stretch',flexDirection: 'row',justifyContent: 'center',}}>
            <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                <ScrollView
                    horizontal={true}
                >
                    <View style={{flexDirection:'column'}} >
                        <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                            <Text>hello</Text>
                        </ImageBackground>
                        <View style={{flexDirection:'row'}} >
                            <Image source={require('../../images/logos/Timer.png')} style={{width:35,height:35,marginRight:30}} />
                            <TimerCountdown
                                initialSecondsRemaining={1000 * 60}
                                style={{ fontSize: 25 }}
                            />

                        </View>
                    </View>
                    <View style={{flexDirection:'column'}} >
                        <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                            <Text>hello</Text>
                        </ImageBackground>
                        <View style={{flexDirection:'row'}} >
                            <Image source={require('../../images/logos/Timer.png')} style={{width:35,height:35,marginRight:30}} />
                            <TimerCountdown
                                initialSecondsRemaining={1000 * 60}
                                style={{ fontSize: 25 }}
                            />

                        </View>
                    </View>
                    <View style={{flexDirection:'column'}} >
                        <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                            <Text>hello</Text>
                        </ImageBackground>
                        <View style={{flexDirection:'row'}} >
                            <Image source={require('../../images/logos/Timer.png')} style={{width:35,height:35,marginRight:30}} />
                            <TimerCountdown
                                initialSecondsRemaining={1000 * 60}
                                style={{ fontSize: 25 }}
                            />

                        </View>
                    </View>
                    <View style={{flexDirection:'column'}} >
                        <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                            <Text>hello</Text>
                        </ImageBackground>
                        <View style={{flexDirection:'row'}} >
                            <Image source={require('../../images/logos/Timer.png')} style={{width:35,height:35,marginRight:30}} />
                            <TimerCountdown
                                initialSecondsRemaining={1000 * 60}
                                style={{ fontSize: 25 }}
                            />

                        </View>
                    </View>
                    <View style={{flexDirection:'column'}} >
                        <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                            <Text>hello</Text>
                        </ImageBackground>
                        <View style={{flexDirection:'row'}} >
                            <Image source={require('../../images/logos/Timer.png')} style={{width:35,height:35,marginRight:30}} />
                            <TimerCountdown
                                initialSecondsRemaining={1000 * 60}
                                style={{ fontSize: 25 }}
                            />

                        </View>
                    </View>
                    <View style={{flexDirection:'column'}} >
                        <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                            <Text>hello</Text>
                        </ImageBackground>
                        <View style={{flexDirection:'row'}} >
                            <Image source={require('../../images/logos/Timer.png')} style={{width:35,height:35,marginRight:30}} />
                            <TimerCountdown
                                initialSecondsRemaining={1000 * 60}
                                style={{ fontSize: 25 }}
                            />

                        </View>
                    </View>
                </ScrollView>
            </View>
            // </View>
        );
    }
}
//export default withNavigation(Listinview);
const styles = StyleSheet.create({
    container :{
        backgroundColor : '#f8f8f8',

    }
});