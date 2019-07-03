import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Button,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator, AsyncStorage,
    ImageBackground
} from 'react-native'
import Share from 'react-native-share';
import CountDown from 'react-native-countdown-component';
export default class Slider extends Component {
    render() {
        return (
            <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                <ScrollView
                    horizontal={true}
                >
                    {this.props.data.map((item) =>
                        <View style={{flexDirection: 'column', marginRight: 30}} key={item.id}>
                            <View style={{
                                flexDirection: 'row',
                                height: 25,
                                width: 250,
                                justifyContent: 'space-between',
                                marginBottom: 10
                            }}>

                                <View style={{flexDirection:'row'}}>
                                    <Image style={{height: 15, width: 15, marginRight: 5, marginTop: 5}}
                                           source={require('../images/logos/level.png')}/>
                                    <Text style={{textAlign: 'left', fontSize: 15}}>سطح{item.min_level}</Text>
                                </View>
                                <Text style={{fontSize:14,fontFamily:'IRANSansMobile',textAlign:'right',marginLeft:'5%',marginTop:5}}>{item.title}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('adinfo', {ad_id: item.id})}>
                                <ImageBackground key={item.id}
                                                 source={{uri: item.pic}}
                                                 style={{
                                                     resizeMode: 'contain',
                                                     marginBottom: 10,
                                                     borderRadius: 20,
                                                     overflow: 'hidden',
                                                     justifyContent: 'flex-start',
                                                     alignItems: 'flex-start',
                                                     width: this.props.sliderWidth,
                                                     height: this.props.sliderHeight
                                                 }}>
                                    <View style={{marginLeft: 10, height: 25, backgroundColor: 'black'}}>
                                        <Text style={{color: 'white', fontSize: 20}}>{item.off}%</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <View style={{justifyContent: 'center', flexDirection: 'row', marginBottom: 10}}>
                                <Image key={item.id}
                                       source={require('../images/logos/Timer.png')}
                                       style={{width: 35, height: 35, marginRight: 30, borderRadius: 40}}/>
                                {item.typeoftime == 2 && <CountDown
                                    size={15}
                                    until={item.timers}
                                    onFinish={() => alert('Finished')}
                                    digitStyle={{backgroundColor: '#FFF', borderWidth: 1, borderColor: '#c5c618'}}
                                    digitTxtStyle={{color: '#b3b16f'}}
                                    timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                    separatorStyle={{color: '#a9a7c6'}}
                                    timeToShow={['H', 'M', 'S']}
                                    timeLabels={{m: null, s: null}}
                                    showSeparator
                                />}
                                {item.typeoftime == 1 &&
                                <Text style={{marginTop: 8}}> {item.timers}روز باقی مانده</Text>
                                }
                                {item.typeoftime == 0 &&
                                <Text style={{marginTop: 8}}>به اتمام رسیده</Text>
                                }
                            </View>
                            <View style={{
                                width: 250,
                                height: 30,
                                justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <Text>+{item.bought}</Text>
                                <View style={{flexDirection: 'row',marginBottom:5}}>
                                    {item.Scoin_available == 1 &&
                                    <View style={{flexDirection: 'row',marginLeft:100}}>
                                        <Text style={{
                                            textAlign: 'left',
                                            fontSize: 15,
                                            fontFamily: 'IRANSansMobile',
                                            marginTop:3
                                        }}>کوین</Text>
                                        <Image style={{
                                            resizeMode: 'contain',
                                            maxHeight: 20,
                                            maxWidth: 20,
                                            marginRight: 5,
                                            marginTop:3
                                        }} source={require('../images/logos/Scoin.png')}/>
                                        <Text style={{
                                            textAlign: 'left',
                                            fontSize: 22,
                                            fontFamily: 'traffic'
                                        }}>{item.Scoin_cost}</Text>
                                        <Text style={{
                                            color: '#707070',
                                            fontStyle: 'italic',
                                            textDecorationLine: 'line-through'
                                        }}> {item.old_cost} </Text>
                                    </View>
                                    }
                                    {item.Scoin_available == 0 &&
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color: 'black', fontSize: 15}}> هزارتومان </Text>
                                        <Text style={{color: 'black', fontSize: 15}}> {item.cost} </Text>
                                        <Text style={{
                                            color: '#707070',
                                            fontStyle: 'italic',
                                            textDecorationLine: 'line-through'
                                        }}> {item.old_cost} </Text>
                                    </View>
                                    }
                                </View>
                            </View>
                        </View>)}
                </ScrollView>
            </View>
        );
    }
}