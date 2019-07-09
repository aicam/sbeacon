import React, {Component}
    from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator, AsyncStorage,
    KeyboardAvoidingView,
    ImageBackground,
    Platform, StyleSheet
} from 'react-native'
import Share from 'react-native-share';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';

export default class ADinfo extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loaded: false,
            com: "",
            text_state: 1,
            comments: null,
            level: 0,
            offset: 0,
            comments_loaded: false,
            ad_id: 1,
            color_text_1: '#b3b300',
            color_text_2: '#b3b300',
            color_text_3: '#808000'
        }
    }

    onShare() {
        const shareOptions = {
            title: 'اشتراک فایل از اپلیکیشن اسکوین',
            message: 'تبلیغ : ' + this.state.data.title + ' لینک:' + this.state.data.ad_link
        };
        return Share.open(shareOptions);
    }

    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error);
        }
    }

    async _change_ad_state(ad_id) {
        this.setState({ad_id: ad_id}, () => this.get_ad_data())
    }

    async get_ad_data() {
        this.setState({loaded: false});
        fetch('http://parsbeacon.ir/requests/receive_comments?ad_id=' + this.state.ad_id + '&offset=' + this.state.offset).then((response) => {
            response.json().then((json_data) => {
                console.log(this.state.comments);
                this.setState({
                    comments: json_data.comments,
                    comments_loaded: true
                })
            })
        });
        fetch('http://parsbeacon.ir/requests/ADinfo?ad_id=' + this.state.ad_id).then((response) => {
            response.json().then((jsondata) => {
                    console.log(jsondata);
                    this.setState({
                        data: jsondata,
                        loaded: true
                    });
                }
            )
        });
    }

    async componentDidMount() {
        await this._change_ad_state(this.props.ad_id);
        await this.get_ad_data();
        const username = await this.getUsername();
        const page_url = "http://parsbeacon.ir/requests/userData?username=" + username;
        fetch(page_url)
            .then((response) => response.json()
                .then((responseJson) => {
                    this.setState({
                        level: responseJson.level
                    })
                }, function () {
                }).catch((error) => {
                    Alert.alert(error)
                })
            ).catch((error) => {
            Alert.alert(error)
        });
    }

    _changeText(id){
        switch (id) {
            case 1:
                this.setState({color_text_1: '#808000',color_text_2: '#b3b300',
                    color_text_3: '#b3b300'});
                break;
            case 2:
                this.setState({color_text_1: '#b3b300',color_text_2: '#808000',
                    color_text_3: '#b3b300'});
                break;
            case 3:
                this.setState({color_text_1: '#b3b300',color_text_2: '#b3b300',
                    color_text_3: '#808000'});
                break;
        }
        this.setState({text_state: id});
    }

    async submit_comment(comment) {
        let username = await this.getUsername();
        console.log(username + " uss");
        fetch('http://parsbeacon.ir/requests/comment?cm=' + comment + '&ad_id=' + this.state.ad_id + '&username=' + username).then((response) => {
            Alert.alert('نظر شما با موفقیت ثبت شد');
            return;
        });
    }

    comments_view() {
        var newoffset = (this.state.offset + 1);
        this.setState({offset: newoffset});
        fetch('http://parsbeacon.ir/requests/receive_comments?ad_id=' + this.state.ad_id + '&offset=' + newoffset).then((response) => {
            response.json().then((json_data) => {
                console.log(json_data.comments);
                let newcomments = this.state.comments.concat(json_data.comments);
                this.setState({
                    comments: newcomments,
                })
            })
        })
    }

    update_star(rate) {
        fetch('http://parsbeacon.ir/requests/set_rate?ad_id=' + this.state.ad_id + '&rate=' + rate).then((response) => {
            response.json().then((json_data) => {
                if (json_data.success) {
                    Alert.alert('رای شما با موفقیت ثبت شد')
                } else {
                    Alert.alert('مشکلی در ثبت رای پیش آمده')
                }
            }).catch((err) => Alert.alert(err))
        }).catch((err) => Alert.alert(err))
    }

    render() {
        return (

            <View style={{flexDirection: 'column', flex: 1, display: 'flex'}}>
                {this.state.loaded &&
                <ScrollView style={{flex:1}}>

                    <View style={{flex: 3, justifyContent: 'space-between', flexDirection: 'row',}}>
                        <View style={{flex: 4, flexDirection: 'column', padding: 20}}>
                            <Text
                                style={{marginTop: 20, fontSize: 20, textAlign: 'right'}}>{this.state.data.title}</Text>
                            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end'}}>
                                <Text style={{fontSize: 15, marginRight: 10}}>{this.state.data.rate}</Text>
                                <TouchableOpacity onPress={() => this.update_star(1)}>
                                    <Image source={require('../images/logos/star_active.png')}
                                           style={{width: 20, height: 20, marginRight: 3}}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.update_star(2)}>
                                    {parseInt(this.state.data.rate) >= 2 ?
                                        <Image source={require('../images/logos/star_active.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/> :
                                        <Image source={require('../images/logos/star.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/>}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.update_star(3)}>
                                    {parseInt(this.state.data.rate) >= 3 ?
                                        <Image source={require('../images/logos/star_active.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/> :
                                        <Image source={require('../images/logos/star.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/>}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.update_star(4)}>
                                    {parseInt(this.state.data.rate) >= 4 ?
                                        <Image source={require('../images/logos/star_active.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/> :
                                        <Image source={require('../images/logos/star.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/>}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.update_star(5)}>
                                    {parseInt(this.state.data.rate) == 5 ?
                                        <Image source={require('../images/logos/star_active.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/> :
                                        <Image source={require('../images/logos/star.png')}
                                               style={{width: 20, height: 20, marginRight: 3}}/>}
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={{fontSize: 15, marginTop: 10, textAlign: 'right', fontFamily: 'IRANSansMobile'}}>دسته
                                بندی:
                                {this.state.data.category.map((item) =>
                                    item.name + ' ,'
                                )}</Text>
                            <View style={{width: '100%', height: 30, justifyContent: 'flex-end', flexDirection: 'row'}}>
                                <View style={{flexDirection: 'row'}}>
                                    {!this.state.data.Scoin_available && <Text style={{
                                        color: 'black',
                                        fontSize: 15,
                                        fontFamily: 'IRANSansMobile'
                                    }}> هزارتومان </Text>}
                                    <Text style={{color: 'black', fontSize: 15}}>{this.state.data.cost}</Text>
                                    <Text style={{
                                        color: '#707070',
                                        fontStyle: 'italic',
                                        textDecorationLine: 'line-through'
                                    }}> {this.state.data.old_cost} </Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => {
                                if (this.state.data.Scoin_available) {
                                    this.props.navigation.navigate('webview', {url: 'http://parsbeacon.ir/requests/Buy?ad_id=' + this.state.data.id})
                                } else {
                                    if (this.state.data.min_level < this.state.level)
                                        this.props.navigation.navigate('webview', {url: 'http://parsbeacon.ir/requests/foreign_ad?ad_id=' + this.state.data.id})
                                    else
                                        Alert.alert(" شما هنوز به سطح " + this.state.data.min_level + " نرسیده اید.")
                                }
                            }}>
                                <LinearGradient colors={['#0078ff', '#00edff']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={{
                                    overflow: 'hidden',
                                    borderRadius: 10,
                                    marginTop: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: 30,
                                }}>

                                <View>
                                    {this.state.data.Scoin_available == 1 && <Text style={{
                                        textAlign: 'right',
                                        fontSize: 20,
                                        color: 'white',
                                        fontFamily: 'IRANSansMobile'
                                    }}>خرید با سکه</Text>}
                                    {this.state.data.Scoin_available == 0 && <Text style={{
                                        textAlign: 'right',
                                        fontSize: 20,
                                        color: 'white',
                                        fontFamily: 'IRANSansMobile'
                                    }}>صفحه تبلیغ</Text>}
                                </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <Image source={{uri: this.state.data.pic}}
                               style={{width: '40%', height: '80%', marginBottom: 30, marginRight: 10, marginTop: 45}}
                        />
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 5, justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 18, marginLeft: 10, marginTop: 5}}>+{this.state.data.bought} </Text>
                        <TouchableOpacity onPress={() => this.onShare()}>
                            <Image source={require('../images/logos/share.png')}
                                   style={{width: 35, height: 35, marginRight: 10}}/>
                        </TouchableOpacity>
                        <View
                            style={{justifyContent: 'center', flexDirection: 'row', marginBottom: 10, marginRight: 20}}>
                            <Image
                                source={require('../images/logos/Timer.png')}
                                style={{width: 35, height: 35, marginRight: 30, borderRadius: 40}}/>
                            {this.state.data.typeoftime == 2 && <CountDown
                                size={15}
                                until={this.state.data.timers}
                                onFinish={() => alert('Finished')}
                                digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
                                digitTxtStyle={{color: '#bec0c6'}}
                                tisha-regexmeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                separatorStyle={{color: '#c6bd1a'}}
                                timeToShow={['H', 'M', 'S']}
                                timeLabels={{m: null, s: null}}
                                showSeparator
                            />}
                            {this.state.data.typeoftime == 1 &&
                            <Text style={{marginTop: 8, fontFamily: 'IRANSansMobile'}}> روز باقی
                                مانده{this.state.data.timers}</Text>
                            }
                            {this.state.data.typeoftime == 0 &&
                            <Text style={{marginTop: 8, fontFamily: 'IRANSansMobile'}}>به اتمام رسیده</Text>
                            }
                        </View>
                    </View>
                    <ScrollView horizontal={true}>
                        {this.state.data.pic_links.map((item) =>
                            <Image key={item.url} source={{uri: item.url}} style={{
                                width: 300,
                                height: 186,
                                borderRadius: 50,
                                overflow: 'hidden',
                                resizeMode: 'contain',
                                marginRight: 30
                            }}/>
                        )}
                    </ScrollView>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5}}>
                        <TouchableOpacity onPress={() => this._changeText(1)}>
                        <View style={{
                            borderTopEndRadius: 15,
                            backgroundColor: this.state.color_text_1,
                            paddingHorizontal: '10%',
                            paddingVertical: 8
                        }}>
                            <Text style={{fontSize: 15, color: '#f2f2f2'}}>معرفی</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._changeText(3)}>
                        <View style={{
                            borderTopEndRadius: 15,
                            borderTopStartRadius: 15,
                            backgroundColor: this.state.color_text_3,
                            paddingHorizontal: '10%',
                            paddingVertical: 8
                        }}>
                            <Text style={{fontSize: 15, color: '#f2f2f2'}}>امکانات</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._changeText(2)}>
                        <View style={{
                            alignItems: 'center',
                            borderTopStartRadius: 15,
                            backgroundColor: this.state.color_text_2,
                            paddingHorizontal: '10%',
                            paddingVertical: 8
                        }}>
                            <Text style={{fontSize: 15, color: '#f2f2f2'}}>روش استفاده</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 3,
                        flexDirection: 'column',
                        borderWidth: 1,
                        borderColor: '#919191',
                        paddingBottom: 20,
                        paddingTop: 20
                    }}>
                        <Text style={{
                            fontSize: 20,
                            textAlign: 'right',
                            marginRight: 20,
                            fontFamily: 'IRANSansMobile'
                        }}>{this.state.text_state == 1 && this.state.data.description}
                            {this.state.text_state == 2 && this.state.data.pay_way}
                            {this.state.text_state == 3 && this.state.data.features}
                        </Text>
                    </View>

                    {/* related */}
                    <KeyboardAvoidingView
                        behavior={"padding"}
                        style={Platform.OS === 'ios' ?  {flex: 1,}  : {flex: 1,}}
                        enabled
                    >
                    <View style={{marginTop: 20, borderWidth: 1, borderColor: '#f5f1f5'}}>
                        <ScrollView
                            horizontal={true}
                        >
                            {this.state.data.related.map((item) =>
                                <View style={{flexDirection: 'column', marginRight: 30}} key={item.id}>
                                    <View style={{
                                        flexDirection: 'row',
                                        height: 25,
                                        width: 250,
                                        justifyContent: 'space-between',
                                        marginBottom: 10
                                    }}>

                                        <View style={{flexDirection: 'row'}}>
                                            <Image style={{height: 15, width: 15, marginRight: 5, marginTop: 5}}
                                                   source={require('../images/logos/level.png')}/>
                                            <Text style={{textAlign: 'left', fontSize: 15}}>سطح{item.min_level}</Text>
                                        </View>
                                        <View>
                                            <Text style={{
                                                fontSize: 14,
                                                fontFamily: 'IRANSansMobile',
                                                textAlign: 'left',
                                                marginLeft: '5%',
                                                marginTop: 5
                                            }}>{item.title}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this._change_ad_state(item.id);
                                        }
                                        }>
                                        <ImageBackground key={item.id}
                                                         source={{uri: item.pic}}
                                                         style={{
                                                             resizeMode: 'contain',
                                                             marginBottom: 10,
                                                             borderRadius: 20,
                                                             overflow: 'hidden',
                                                             justifyContent: 'flex-start',
                                                             alignItems: 'flex-start',
                                                             width: 325,
                                                             height: 201
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
                                            digitStyle={{
                                                backgroundColor: '#FFF',
                                                borderWidth: 2,
                                                borderColor: '#1CC625'
                                            }}
                                            digitTxtStyle={{color: '#bec0c6'}}
                                            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                            separatorStyle={{color: '#c6bd1a'}}
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
                                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                                            {item.Scoin_available == 1 &&
                                            <View style={{flexDirection: 'row', marginLeft: 100}}>
                                                <Text style={{
                                                    textAlign: 'left',
                                                    fontSize: 15,
                                                    fontFamily: 'IRANSansMobile',
                                                    marginTop: 3
                                                }}>کوین</Text>
                                                <Image style={{
                                                    resizeMode: 'contain',
                                                    maxHeight: 20,
                                                    maxWidth: 20,
                                                    marginRight: 5,
                                                    marginTop: 3
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
                                            <View style={{flexDirection: 'row'}}>
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
                    {/* related*/}
                    </KeyboardAvoidingView>


                    <View style={{flexDirection: 'column', flex: 2}}>
                        {!this.state.comments_loaded &&
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <ActivityIndicator/>
                        </View>
                        }
                        {this.state.comments_loaded && this.state.comments.map((item) =>
                            <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                                <Text style={{
                                    fontSize: 15,
                                    marginLeft: 10,
                                    textAlign: 'right',
                                    marginTop: 3
                                }}>:کاربر {item.username}</Text>
                                <Text style={{marginLeft: 20, fontSize: 20}}>{item.comment}</Text>
                            </View>)}
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', borderEndWidth: 2}}>
                            <TextInput style={{fontSize: 20, flex: 8, marginRight: 5, }} placeholder="نظر خود را بنویسید"
                                       onChangeText={(text) => {
                                           this.setState({com: text})
                                       }}/>

                            <View style={{
                                backgroundColor: '#66a3ff',
                                borderRadius: 10,
                                marginRight: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,

                            }}>
                                <TouchableOpacity onPress={() => this.submit_comment(this.state.com)}>
                                    <Text style={{color: '#FFFFFF'}}>ثبت</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Text style={{
                                fontSize: 15,
                                color: 'blue',
                                textAlign: 'center',
                                paddingRight: 10,
                                paddingLeft: 10,
                                borderWidth: 1,
                                borderColor: '#66a3ff',
                                borderRadius: 10
                            }} onPress={() => {
                                this.comments_view();
                            }}>نظرات بیشتر</Text>
                        </View>
                    </View>
                </ScrollView>
                }
                {/* footer */}
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