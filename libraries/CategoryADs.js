import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Alert
} from 'react-native';
import TimerCountdown from "react-native-countdown-component";


export default class CategoryADs extends React.Component {
    _set_state_more(){
        this.setState({moreloaded:true})
    }
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    fetch_new_data() {
        let offset_number = this.state.offset + 1;
        this.setState({moreloaded: false, offset: offset_number});
        fetch('http://parsbeacon.ir/requests/more?option=' + this.state.cid + '&offset=' + this.state.offset).then(
            (response) => {
                response.json().then((jsondata) => {
                    if(jsondata.items.length) {
                        this.setState({
                            data: jsondata.items
                        })
                    }
                    }
                ).catch((err) => {Alert.alert(err.toString())})
            }
        ).catch((err) => {Alert.alert(err.toString())})
    }

    change_category(cid) {
        console.log(cid + "new");
        this.setState({offset: 0, isLoaded: false, cid: cid});
        fetch('http://parsbeacon.ir/requests/more?option=' + cid + '&offset=' + 0).then(
            (response) => {
                response.json().then((jsondata) => {
                        let CT = this.state.Categories_Data[cid - 1].title;
                        this.setState({category_title: CT});
                        this.setState({
                            isLoaded: true,
                            data: jsondata.items
                        })
                    }
                ).catch((err) => Alert.alert(err.toString()))
            }
        ).catch((err) => Alert.alert(err.toString()))
    }

    constructor() {
        super();
        let Categories_Data = [
            {"category_ID": 1, "address": {profile: require('../assets/gp1@1.jpg')}, "title": "ایرانی و سنتی"},
            {"category_ID": 2, "address": {profile: require('../assets/gp1@2.jpg')}, "title": "ایتالیای و ملل"},
            {"category_ID": 3, "address": {profile: require('../assets/gp1@3.jpg')}, "title": "فست فود"},
            {"category_ID": 4, "address": {profile: require('../assets/gp1@4.jpg')}, "title": "سفره خانه"},
            {"category_ID": 5, "address": {profile: require('../assets/gp1@5.jpg')}, "title": "بوفه"},
            {"category_ID": 6, "address": {profile: require('../assets/gp1@6.jpg')}, "title": "کافی شاپ"},
            {"category_ID": 7, "address": {profile: require('../assets/gp1@7.jpg')}, "title": "صبحانه"},
            {"category_ID": 8, "address": {profile: require('../assets/gp1@8.jpg')}, "title": "کترینگ"},
            {"category_ID": 9, "address": {profile: require('../assets/gp2@1.jpg')}, "title": "تورهای مسافرتی"},
            {"category_ID": 10, "address": {profile: require('../assets/gp2@2.jpg')}, "title": "هتل و اقامتگاه"},
            {
                "category_ID": 11,
                "address": {profile: require('../assets/gp2@3.jpg')},
                "title": "شهربازی و مراکز تفریحی"
            },
            {
                "category_ID": 12,
                "address": {profile: require('../assets/gp2@4.jpg')},
                "title": "بازی گروهی و زمین بازی"
            },
            {"category_ID": 13, "address": {profile: require('../assets/gp2@5.jpg')}, "title": "استخر و ورزش های آبی"},
            {"category_ID": 14, "address": {profile: require('../assets/gp2@6.jpg')}, "title": "ورزش های هوایی"},
            {"category_ID": 15, "address": {profile: require('../assets/gp2@7.jpg')}, "title": "باشگاه ورزشی"},
            {"category_ID": 16, "address": {profile: require('../assets/gp3@1.jpg')}, "title": "لیزر موهای زائد"},
            {"category_ID": 17, "address": {profile: require('../assets/gp3@2.jpg')}, "title": "ژل و بوتاکس"},
            {
                "category_ID": 18,
                "address": {profile: require('../assets/gp3@3.jpg')},
                "title": "خدمات تناسب اندام و لاغری"
            },
            {"category_ID": 19, "address": {profile: require('../assets/gp3@4.jpg')}, "title": "ماساژ"},
            {"category_ID": 20, "address": {profile: require('../assets/gp3@5.jpg')}, "title": "پوست و زیبایی"},
            {"category_ID": 21, "address": {profile: require('../assets/gp3@6.jpg')}, "title": "خدمات دندانپزشکی"},
            {"category_ID": 22, "address": {profile: require('../assets/gp4@1.jpg')}, "title": "نمایشی و فرهنگی"},
            {"category_ID": 23, "address": {profile: require('../assets/gp4@2.jpg')}, "title": "آتلیه و خدمات چاپ"},
            {"category_ID": 24, "address": {profile: require('../assets/gp4@3.jpg')}, "title": "تئاتر"},
            {"category_ID": 25, "address": {profile: require('../assets/gp4@4.jpg')}, "title": "کنسرت"},
            {"category_ID": 26, "address": {profile: require('../assets/gp4@5.jpg')}, "title": "سینما"},
            {"category_ID": 27, "address": {profile: require('../assets/gp5@1.jpg')}, "title": "کامپیوتر"},
            {"category_ID": 28, "address": {profile: require('../assets/gp5@2.jpg')}, "title": "موسیقی"},
            {"category_ID": 29, "address": {profile: require('../assets/gp5@3.jpg')}, "title": "آشپزی"},
            {"category_ID": 30, "address": {profile: require('../assets/gp5@4.jpg')}, "title": "زبان های خارجی"},
            {"category_ID": 31, "address": {profile: require('../assets/gp5@5.jpg')}, "title": "گردهمایی و همایش"},
            {"category_ID": 32, "address": {profile: require('../assets/gp5@6.jpg')}, "title": "هنر"},
            {"category_ID": 33, "address": {profile: require('../assets/gp5@7.jpg')}, "title": "حسابداری"},
            {"category_ID": 34, "address": {profile: require('../assets/gp5@8.jpg')}, "title": "مهارت های فردی"},
            {"category_ID": 35, "address": {profile: require('../assets/gp6@1.jpg')}, "title": "آرایش مو و صورت"},
            {"category_ID": 36, "address": {profile: require('../assets/gp6@2.jpg')}, "title": "خدمات ناخن"},
            {"category_ID": 37, "address": {profile: require('../assets/gp6@3.jpg')}, "title": "خدمات پوست"},
            {"category_ID": 38, "address": {profile: require('../assets/gp6@4.jpg')}, "title": "اپیلاسیون"},
            {
                "category_ID": 39,
                "address": {profile: require('../assets/gp7@1.jpg')},
                "title": "کالای دیجیتال و لوازم جانبی"
            },
            {"category_ID": 40, "address": {profile: require('../assets/gp7@2.jpg')}, "title": "خانه و آشپزخانه"},
            {
                "category_ID": 41,
                "address": {profile: require('../assets/gp7@3.jpg')},
                "title": "آرایشی بهداشتی و پزشکی"
            },
            {"category_ID": 42, "address": {profile: require('../assets/gp7@4.jpg')}, "title": "مد و پوشاک و اکسسوری"},
            {"category_ID": 43, "address": {profile: require('../assets/gp7@5.jpg')}, "title": "کودکان و سرگرمی"},
            {"category_ID": 44, "address": {profile: require('../assets/gp7@6.jpg')}, "title": "ورزش و سفر"},
            {"category_ID": 45, "address": {profile: require('../assets/gp7@7.jpg')}, "title": "ملزومات اداری و هنر"},
            {"category_ID": 46, "address": {profile: require('../assets/gp7@8.jpg')}, "title": "ابزارآلات"},
            {"category_ID": 47, "address": {profile: require('../assets/gp7@9.jpg')}, "title": "نرم افزار و بازی"},
            {"category_ID": 48, "address": {profile: require('../assets/gp7@10.jpg')}, "title": "سوپرمارکت"},
        ];
        this.state = {
            isLoaded: false,
            moreloaded: false,
            data: "",
            cid: '',
            Categories_Data: Categories_Data,
            cid_min: 0,
            cid_max: 0,
            offset : 1,
            category_title: ""
        };

    }
    _state_cid(cid){
        this.setState({cid:cid})
    }
    componentDidMount() {
        let items_number_min = (this.props.cid2 <= 8) ? 1 :
            (this.props.cid2 <= 15) ? 9 : (this.props.cid2 <= 21) ? 16 : (this.props.cid2 <= 26) ? 22 :
                (this.props.cid2 <= 31) ? 24 : (this.props.cid2 <= 37) ? 34 : 0;
        let items_number_max = (this.props.cid2 <= 8) ? 8 :
            (this.props.cid2 <= 15) ? 15 : (this.props.cid2 <= 21) ? 21 : (this.props.cid2 <= 26) ? 26 :
                (this.props.cid2 <= 31) ? 31 : (this.props.cid2 <= 37) ? 37 : 0;
        this.setState({
            isLoaded: false,
            moreloaded: false,
            data: "",
            cid_min: items_number_min,
            cid_max: items_number_max,
            category_title: ""
        });
        this._state_cid(this.props.cid2);
        fetch('http://parsbeacon.ir/requests/more?option=' + this.props.cid2 + '&offset=0').then(
            (response) => {
                response.json().then((jsondata) => {
                        this.setState({
                            isLoaded: true,
                            moreloaded: true,
                            data: jsondata.items,
                        })
                    }
                )
            }
        );
        let CT = this.state.Categories_Data[this.props.cid2 - 1].title;
        this.setState({category_title: CT})
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <ScrollView horizontal={true}>
                        {this.state.Categories_Data.map((item) =>
                            item.category_ID >= this.state.cid_min && item.category_ID <= this.state.cid_max &&
                            <TouchableOpacity onPress={() => this.change_category(item.category_ID)}>
                                <Image source={item.address.profile} style={{
                                    resizeMode: 'contain',
                                    marginRight: 30,
                                    marginBottom: 10,
                                    minHeight: 200,
                                    minWidth: 250,
                                    maxHeight: 200,
                                    maxWidth: 250,
                                    borderRadius: 100,
                                    overflow: 'hidden'
                                }}/>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20}}>
                    <Text style={{
                        fontSize: 25,
                        textAlign: 'right',
                        marginRight: 10,
                        fontFamily: 'IRANSansMobile'
                    }}>{this.state.category_title}</Text>
                </View>
                <ScrollView>
                <View style={{flexDirection: 'column', marginTop: 10}}>
                    {!this.state.isLoaded &&
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator/>
                    </View>
                    }
                    {this.state.isLoaded &&
                    this.state.data.map((item) =>
                            <View key={item.id} style={{
                                paddingBottom: 15,
                                borderBottomWidth: 2,
                                flexDirection: 'column',
                                marginBottom: 15,
                                flex: 1
                            }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('adinfo', {ad_id: item.id})}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flexDirection: 'column', flex: 5}}>
                                            <Text style={{
                                                fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 8
                                                , fontFamily: 'IRANSansMobile'
                                            }}>{item.title}</Text>
                                            <Text style={{
                                                fontSize: 15,
                                                textAlign: 'right',
                                                marginRight: 10
                                                , fontFamily: 'IRANSansMobile'
                                            }}>{item.short_desc}</Text>
                                        </View>
                                        <View style={{flex: 2.5, justifyContent: 'center'}}>

                                            <ImageBackground source={{uri: item.pic}} style={{
                                                width: 120,
                                                height: 120,
                                                overflow: 'hidden',
                                                borderRadius: 20,
                                                paddingRight:2,
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

                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        marginLeft: 10,
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        padding:5,
                                        alignItems: 'center',
                                        borderColor: '#00701a', backgroundColor: '#00701a'
                                    }}>
                                        <Text style={{fontSize: 15, marginRight: 5, color: 'white'}}>{item.rate}</Text>
                                        <Text style={{
                                            fontSize: 15,
                                            color: 'white',
                                            fontFamily: 'IRANSansMobile'
                                        }}>امتیاز</Text>
                                    </View>
                                    <View style={{
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        padding:5,
                                        alignItems: 'center',
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
                                    <View style={{
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        padding:5,
                                        alignItems: 'center',
                                        borderColor: '#ff403c',
                                        backgroundColor: '#ff403c', fontFamily: 'IRANSansMobile'
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: 'white'
                                        }}> {item.bought} خرید </Text>
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
                                        until={item.timers}
                                        style={{fontSize: 25}}
                                    />}
                                    {item.typeoftime == 1 &&
                                    <Text style={{marginTop: 8, fontFamily: 'IRANSansMobile'}}> روز باقی
                                        مانده{item.timers}</Text>
                                    }
                                    {item.typeoftime == 0 &&
                                    <Text style={{marginTop: 8, fontFamily: 'IRANSansMobile'}}>به اتمام رسیده</Text>
                                    }
                                </View>
                            </View>
                        )}

                        <View style={{width: '100%', height: 50, backgroundColor: '#007AFF', alignItems: 'stretch'}}>
                            <TouchableOpacity onPress={() => this.fetch_new_data()}>
                                <Text style={{
                                    fontSize: 25,
                                    fontFamily: 'IRANSansMobile',
                                    textAlign: 'center',
                                    color:'white'
                                }}>بیشتر</Text>
                            </TouchableOpacity>
                        </View>

                </View>
                    </ScrollView>
            </View>
        );
    }
}


