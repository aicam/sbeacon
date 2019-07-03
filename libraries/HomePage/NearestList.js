import React, {Component} from 'react';
import {Text,View,StyleSheet,
    Image,FlatList, ActivityIndicator,ScrollView,ImageBackground} from 'react-native'
import { withNavigation } from 'react-navigation';
export default class NearestList extends Component{
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
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>
                    <ImageBackground source={{uri : 'https://blog.bannersnack.com/wp-content/uploads/2017/04/advertisement-ideas-creative-product-marketing.jpg'}} style={{resizeMode:'contain',marginRight:30,height:200,width:250,borderRadius:50, alignItems: 'center', justifyContent: 'center' }} >
                        <Text>hello</Text>
                    </ImageBackground>

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