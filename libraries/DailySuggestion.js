import React, {Component} from 'react';
import {Text,View,StyleSheet,
    Image,FlatList, ActivityIndicator,ScrollView,
    ImageBackground} from 'react-native'
import TimerCountdown from "react-native-timer-countdown";
import { withNavigation } from 'react-navigation';
export default class Listinview extends Component{
    constructor(props){
        super(props);
        this.props.navigation = props.navigation;
    }

    componentDidMount(){

    }
    render(){

        return(
            //<View style={{flex:3,alignItems: 'stretch',flexDirection: 'row',justifyContent: 'center',}}>
            <View style={{marginTop:20,marginBottom:30,borderColor:'#919191',borderBottomWidth:4}} >
                <ScrollView
                    horizontal={true}
                >
                        <ImageBackground source={{uri : 'https://i.pinimg.com/originals/99/30/5f/99305f5ec58f269b35293107aa3af692.jpg'}} style={{marginRight:20,resizeMode:'contain',height:100,width:160,borderRadius:30, alignItems: 'center', justifyContent: 'center',overflow:'hidden' }} >
                            <Text>hello</Text>
                        </ImageBackground>

                        <ImageBackground source={{uri : 'https://i.pinimg.com/originals/99/30/5f/99305f5ec58f269b35293107aa3af692.jpg'}} style={{marginRight:20,resizeMode:'contain',height:100,width:160,borderRadius:30, alignItems: 'center', justifyContent: 'center',overflow:'hidden' }} >
                            <Text>hello</Text>
                        </ImageBackground>

                        <ImageBackground source={{uri : 'https://i.pinimg.com/originals/99/30/5f/99305f5ec58f269b35293107aa3af692.jpg'}} style={{marginRight:20,resizeMode:'contain',height:100,width:160,borderRadius:30, alignItems: 'center', justifyContent: 'center',overflow:'hidden' }} >
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