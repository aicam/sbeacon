import React, {Component} from 'react';
import {Text,View,StyleSheet,Image,ImageBackground,ScrollView,ActivityIndicator,TouchableOpacity} from 'react-native'
import TimerCountdown from "react-native-timer-countdown";
export default class CompeleteMenue extends Component {
    constructor(){
        super();
        let Categories_Data = [
            {"category_ID":1,"address": {profile : require('../../assets/gp1@1.jpg')},"title":"ایرانی و سنتی"},
            {"category_ID":2,"address": {profile : require('../../assets/gp1@2.jpg')},"title":"ایتالیای و ملل"},
            {"category_ID":3,"address": {profile : require('../../assets/gp1@3.jpg')},"title":"فست فود"},
            {"category_ID":4,"address": {profile : require('../../assets/gp1@4.jpg')},"title":"سفره خانه"},
            {"category_ID":5,"address": {profile : require('../../assets/gp1@5.jpg')},"title":"بوفه"},
            {"category_ID":6,"address": {profile : require('../../assets/gp1@6.jpg')},"title":"کافی شاپ"},
            {"category_ID":7,"address": {profile : require('../../assets/gp1@7.jpg')},"title":"صبحانه"},
            {"category_ID":8,"address": {profile : require('../../assets/gp1@8.jpg')},"title":"کترینگ"},
            {"category_ID":9,"address": {profile : require('../../assets/gp2@1.jpg')},"title":"تورهای مسافرتی"},
            {"category_ID":10,"address": {profile : require('../../assets/gp2@2.jpg')},"title":"هتل و اقامتگاه"},
            {"category_ID":11,"address": {profile : require('../../assets/gp2@3.jpg')},"title":"شهربازی و مراکز تفریحی"},
            {"category_ID":12,"address": {profile : require('../../assets/gp2@4.jpg')},"title":"بازی گروهی و زمین بازی"},
            {"category_ID":13,"address": {profile : require('../../assets/gp2@5.jpg')},"title":"استخر و ورزش های آبی"},
            {"category_ID":14,"address": {profile : require('../../assets/gp2@6.jpg')},"title":"ورزش های هوایی"},
            {"category_ID":15,"address": {profile : require('../../assets/gp2@7.jpg')},"title":"باشگاه ورزشی"},
            {"category_ID":16,"address": {profile : require('../../assets/gp3@1.jpg')},"title":"لیزر موهای زائد"},
            {"category_ID":17,"address": {profile : require('../../assets/gp3@2.jpg')},"title":"ژل و بوتاکس"},
            {"category_ID":18,"address": {profile : require('../../assets/gp3@3.jpg')},"title":"خدمات تناسب اندام و لاغری"},
            {"category_ID":19,"address": {profile : require('../../assets/gp3@4.jpg')},"title":"ماساژ"},
            {"category_ID":20,"address": {profile : require('../../assets/gp3@5.jpg')},"title":"پوست و زیبایی"},
            {"category_ID":21,"address": {profile : require('../../assets/gp3@6.jpg')},"title":"خدمات دندانپزشکی"},
            {"category_ID":22,"address": {profile : require('../../assets/gp4@1.jpg')},"title":"نمایشی و فرهنگی"},
            {"category_ID":23,"address": {profile : require('../../assets/gp4@2.jpg')},"title":"آتلیه و خدمات چاپ"},
            {"category_ID":24,"address": {profile : require('../../assets/gp4@3.jpg')},"title":"تئاتر"},
            {"category_ID":25,"address": {profile : require('../../assets/gp4@4.jpg')},"title":"کنسرت"},
            {"category_ID":26,"address": {profile : require('../../assets/gp4@5.jpg')},"title":"سینما"},
            {"category_ID":27,"address": {profile : require('../../assets/gp5@1.jpg')},"title":"کامپیوتر"},
            {"category_ID":28,"address": {profile : require('../../assets/gp5@2.jpg')},"title":"موسیقی"},
            {"category_ID":29,"address": {profile : require('../../assets/gp5@3.jpg')},"title":"آشپزی"},
            {"category_ID":30,"address": {profile : require('../../assets/gp5@4.jpg')},"title":"زبان های خارجی"},
            {"category_ID":31,"address": {profile : require('../../assets/gp5@5.jpg')},"title":"گردهمایی و همایش"},
            {"category_ID":32,"address": {profile : require('../../assets/gp5@6.jpg')},"title":"هنر"},
            {"category_ID":33,"address": {profile : require('../../assets/gp5@7.jpg')},"title":"حسابداری"},
            {"category_ID":34,"address": {profile : require('../../assets/gp5@8.jpg')},"title":"مهارت های فردی"},
            {"category_ID":35,"address": {profile : require('../../assets/gp6@1.jpg')},"title":"آرایش مو و صورت"},
            {"category_ID":36,"address": {profile : require('../../assets/gp6@2.jpg')},"title":"خدمات ناخن"},
            {"category_ID":37,"address": {profile : require('../../assets/gp6@3.jpg')},"title":"خدمات پوست"},
            {"category_ID":38,"address": {profile : require('../../assets/gp6@4.jpg')},"title":"اپیلاسیون"},
            {"category_ID":39,"address": {profile : require('../../assets/gp7@1.jpg')},"title":"کالای دیجیتال و لوازم جانبی"},
            {"category_ID":40,"address": {profile : require('../../assets/gp7@2.jpg')},"title":"خانه و آشپزخانه"},
            {"category_ID":41,"address": {profile : require('../../assets/gp7@3.jpg')},"title":"آرایشی بهداشتی و پزشکی"},
            {"category_ID":42,"address": {profile : require('../../assets/gp7@4.jpg')},"title":"مد و پوشاک و اکسسوری"},
            {"category_ID":43,"address": {profile : require('../../assets/gp7@5.jpg')},"title":"کودکان و سرگرمی"},
            {"category_ID":44,"address": {profile : require('../../assets/gp7@6.jpg')},"title":"ورزش و سفر"},
            {"category_ID":45,"address": {profile : require('../../assets/gp7@7.jpg')},"title":"ملزومات اداری و هنر"},
            {"category_ID":46,"address": {profile : require('../../assets/gp7@8.jpg')},"title":"ابزارآلات"},
            {"category_ID":47,"address": {profile : require('../../assets/gp7@9.jpg')},"title":"نرم افزار و بازی"},
            {"category_ID":48,"address": {profile : require('../../assets/gp7@10.jpg')},"title":"سوپرمارکت"},
        ];
        this.state = {
            Categories_Data : Categories_Data
        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <View>
                <View styl={{flexDirection:'column'}} >
                    <View style={{flexDirection: 'row',justifyContent:'flex-end',marginTop:20}}>
                        <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:10,fontFamily:'IRANSansMobile'}}>رستوران ها و فست فود</Text>
                            <Image source={require('../../images/logos/restaurant.png')} style={{width:28,height:28,marginLeft:5,marginRight:5,marginBottom:6}} />
                        </View>
                    </View>
                    <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                        <ScrollView
                            horizontal={true}
                        >
                            {this.state.Categories_Data.map((item) => item.category_ID <= 8 &&
                                <View style={{flexDirection:'column'}} key={item.category_ID}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('categoryads',{'category_ID':item.category_ID})}>
                                        <Image source={item.address.profile} style={{resizeMode:'contain',marginRight:30,marginBottom:10,minHeight:200,minWidth:250,maxHeight:200,maxWidth:250,borderRadius:100,overflow:'hidden' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </ScrollView>
                    </View>




                    <View style={{flexDirection: 'row',justifyContent:'flex-end',marginTop:20}}>
                        <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:10,fontFamily:'IRANSansMobile'}}>تفریحی و ورزشی</Text>
                            <Image source={require('../../images/logos/tafrihi.png')} style={{width:28,height:28,marginLeft:5,marginRight:5,marginBottom:6}} />
                        </View>
                    </View>
                    <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                        <ScrollView
                            horizontal={true}
                        >
                            {this.state.Categories_Data.map((item) =>(item.category_ID >= 9) && (item.category_ID <= 15) &&
                                <View style={{flexDirection:'column'}} key={item.category_ID}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('categoryads',{'category_ID':item.category_ID})}>
                                        <Image source={item.address.profile} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </ScrollView>
                    </View>



                    <View style={{flexDirection: 'row',justifyContent:'flex-end',marginTop:20}}>
                        <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:10,fontFamily:'IRANSansMobile'}}>پزشکی و سلامت</Text>
                            <Image source={require('../../images/logos/medicine.png')} style={{width:28,height:28,marginLeft:5,marginRight:5,marginBottom:6}} />
                        </View>
                    </View>
                    <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                        <ScrollView
                            horizontal={true}
                        >
                            {this.state.Categories_Data.map((item) => item.category_ID >= 16 && item.category_ID <= 21 &&
                                <View style={{flexDirection:'column'}} key={item.category_ID}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('categoryads',{'category_ID':item.category_ID})}>
                                        <Image source={item.address.profile} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </ScrollView>
                    </View>




                    <View style={{flexDirection: 'row',justifyContent:'flex-end',marginTop:20}}>
                        <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:10,fontFamily:'IRANSansMobile'}}>هنر و تئاتر</Text>
                            <Image source={require('../../images/logos/art.png')} style={{width:28,height:28,marginLeft:5,marginRight:5,marginBottom:6}} />
                        </View>
                    </View>
                    <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                        <ScrollView
                            horizontal={true}
                        >
                            {this.state.Categories_Data.map((item) => item.category_ID >= 22 && item.category_ID <= 26 &&
                                <View style={{flexDirection:'column'}} key={item.category_ID}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('categoryads',{'category_ID':item.category_ID})}>
                                        <Image source={item.address.profile} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </ScrollView>
                    </View>



                    <View style={{flexDirection: 'row',justifyContent:'flex-end',marginTop:20}}>
                        <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:10,fontFamily:'IRANSansMobile'}}>آموزشی</Text>
                            <Image source={require('../../images/logos/education.png')} style={{width:28,height:28,marginLeft:5,marginRight:5,marginBottom:6}} />
                        </View>
                    </View>
                    <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                        <ScrollView
                            horizontal={true}
                        >
                            {this.state.Categories_Data.map((item) => item.category_ID >= 27 && item.category_ID <= 34 &&
                                <View style={{flexDirection:'column'}} key={item.category_ID}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('categoryads',{'category_ID':item.category_ID})}>
                                        <Image source={item.address.profile} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </ScrollView>
                    </View>



                    <View style={{flexDirection: 'row',justifyContent:'flex-end',marginTop:20}}>
                        <View style={{alignItems:"flex-end",justifyContent:"flex-end",flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:10,fontFamily:'IRANSansMobile'}}>زیبایی و آرایش</Text>
                            <Image source={require('../../images/logos/lipstick.png')} style={{width:28,height:28,marginLeft:5,marginRight:5,marginBottom:6}} />
                        </View>
                    </View>
                    <View style={{marginTop:20,borderWidth:1,borderColor:'#f5f1f5'}} >
                        <ScrollView
                            horizontal={true}
                        >
                            {this.state.Categories_Data.map((item) => item.category_ID >= 35 && item.category_ID <= 38 &&
                            <View style={{flexDirection:'column'}} key={item.category_ID}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('categoryads',{'category_ID':item.category_ID})}>
                                        <Image source={item.address.profile} style={{resizeMode:'contain',marginRight:30,marginBottom:10,height:200,width:250,borderRadius:200, alignItems: 'center', justifyContent: 'center' }} >
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}