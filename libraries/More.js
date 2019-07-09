import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import TimerCountdown from "./HomePage/CompleteHomePage";


export default class More extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            data: null,
            offset: 1
        }
    }

    componentDidMount() {
        fetch('http://parsbeacon.ir/requests/more?option=' + this.props.cid + '&offset=0').then(
            (response) => {
                response.json().then((jsondata) => {
                        this.setState({
                            isLoaded: true,
                            data: jsondata.items,

                        })
                    }
                )
            }
        )
    }

    fetch_new_data() {
        let offset_number = this.state.offset + 1;
        this.setState({isLoaded: false, offset: offset_number});
        fetch('http://parsbeacon.ir/requests/more?option=' + this.props.cid + '&offset=' + this.state.offset).then(
            (response) => {
                response.json().then((jsondata) => {
                        let new_data = this.state.items;
                    if(jsondata.items.length) {
                        this.setState({
                            data: jsondata.items
                        })
                    }
                        this.setState({
                            isLoaded: true
                        })
                    }
                )
            }
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={{flexDirection: 'column', marginTop: 10}}>
                        {!this.state.isLoaded &&
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <ActivityIndicator/>
                        </View>
                        }
                        {this.state.isLoaded &&
                        <ScrollView>
                            {this.state.data.map((item) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('adinfo',{ad_id : item.id})}>
                                <View key={item.id} style={{
                                    paddingBottom: 15,
                                    borderBottomWidth: 2,
                                    flexDirection: 'column',
                                    marginBottom: 15,
                                    flex: 1
                                }}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flexDirection: 'column', flex: 5}}>
                                            <Text style={{
                                                fontSize: 23, fontWeight: 'bold', textAlign: 'center', marginBottom: 5
                                            }}>{item.title}</Text>
                                            <Text style={{
                                                fontSize: 20,
                                                textAlign: 'right',
                                                marginRight: 10
                                            }}>{item.short_desc}</Text>
                                        </View>
                                        <View style={{flex: 2, justifyContent: 'center'}}>
                                            <TouchableOpacity>
                                                <ImageBackground source={{uri: item.pic}} style={{
                                                    width: 100,
                                                    height: 100,
                                                    borderWidth: 2,
                                                    overflow: 'hidden',
                                                    borderRadius: 20,
                                                    borderColor: '#999966',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'flex-start'
                                                }}>
                                                    <View style={{
                                                        marginLeft: 5,
                                                        width: 30,
                                                        height: 20,
                                                        backgroundColor: 'black'
                                                    }}>
                                                        <Text style={{fontSize: 15, color: 'white'}}>{item.off}%</Text>
                                                    </View>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View
                                        style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            marginLeft: 10,
                                            borderWidth: 1,
                                            borderRadius: 20,
                                            paddingRight: 5,
                                            paddingLeft: 5,
                                            paddingTop: 3,

                                            borderColor: '#00701a', backgroundColor: '#00701a'
                                        }}>
                                            <Text style={{fontSize: 15, marginRight: 5,color:'white'}}>{item.rate}</Text>
                                            <Text style={{fontSize: 15,color:'white'}}>امتیاز</Text>
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            marginTop: 3,
                                            borderWidth: 1,
                                            borderRadius: 20,
                                            paddingRight: 5,
                                            paddingLeft: 5,
                                            paddingTop: 3,

                                            borderColor: '#00bfd6',
                                            backgroundColor: '#00bfd6'
                                        }}>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: 'white', fontSize: 15}}> هزارتومان </Text>
                                                <Text style={{color: 'white', fontSize: 15}}>{item.cost}</Text>
                                                <Text style={{
                                                    color: 'white',
                                                    fontStyle: 'italic',
                                                    textDecorationLine: 'line-through'
                                                }}> {item.old_cost} </Text>
                                            </View>
                                        </View>
                                        <View style={{borderWidth: 1,
                                            borderRadius: 20,
                                            paddingRight: 5,
                                            paddingLeft: 5,
                                            paddingTop: 3,
                                            borderColor: '#ff403c',
                                            backgroundColor: '#ff403c'}}>
                                            <Text style={{
                                                fontSize: 15,
                                                color:'white'
                                            }}> {item.bought} خرید </Text>
                                        </View>
                                        <View style={{marginRight: 10}}>
                                            <Image source={require('../images/logos/notscoin.png')}
                                                   style={{resizeMode: 'contain', width: 35, height: 35}}/>
                                        </View>
                                    </View>
                                    <View style={{
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        marginBottom: 5,
                                        marginTop: 10
                                    }}>
                                        <Image key={item.id}
                                               source={require('../images/logos/Timer.png')}
                                               style={{width: 35, height: 35, marginRight: 30, borderRadius: 40}}/>
                                        {item.typeoftime == 2 && <TimerCountdown
                                            initialSecondsRemaining={item.timers}
                                            style={{fontSize: 25}}
                                        />}
                                        {item.typeoftime == 1 &&
                                        <Text style={{marginTop: 8}}> روز باقی مانده{item.timers}</Text>
                                        }
                                        {item.typeoftime == 0 &&
                                        <Text style={{marginTop: 8}}>به اتمام رسیده</Text>
                                        }
                                    </View>
                                </View>
                                </TouchableOpacity>)}
                        </ScrollView>
                        }
                        <View style={{width: '100%', height: 50, backgroundColor: '#999966', alignItems: 'stretch'}}>
                            <TouchableOpacity onPress={() => this.fetch_new_data()}>
                                <Text style={{fontSize: 25, fontFamily: 'traffic', textAlign: 'center'}}>بیشتر</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
                <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',borderWidth:0.5,borderColor:"#707070"}}>
                    <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',width:'100%'}}>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('Firstpage')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../images/Footer/home.png')} style={{height:24,width:24,marginTop:7}} />
                                <Text style={{fontSize: 10}}>خانه</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('category')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../images/Footer/category_active.png')} style={{height:24,width:24,marginTop:7}} />
                                <Text style={{fontSize: 10}}>دسته بندی</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('miningpage')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../images/Footer/mining.png')} style={{height:24,width:24,marginTop:7}} />
                                <Text style={{fontSize: 10}}>حفاری</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('profile')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../images/Footer/profile.png')} style={{height:24,width:24,marginTop:7}} />
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
    footerViews:{
        alignItems:'center',
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
