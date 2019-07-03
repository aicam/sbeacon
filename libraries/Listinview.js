import React, {Component} from 'react';
import {Text,View,StyleSheet,
    Image,FlatList, ActivityIndicator,ScrollView} from 'react-native'
import { withNavigation } from 'react-navigation';
export default class Listinview extends Component{
    constructor(props){
        super(props);
        this.props.navigation = props.navigation;
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }
    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            //<View style={{flex:3,alignItems: 'stretch',flexDirection: 'row',justifyContent: 'center',}}>
                <ScrollView
                horizontal={true}
                >

                {this.state.dataSource.map(item => (
                    <View key={item.releaseYear} style={{flex:1,width:250,marginLeft:30}} >
                        <Image
                            style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                            source={{uri: 'https://i.pinimg.com/originals/27/84/c4/2784c4a2febf9594bfbbdee11f51325a.jpg'}}
                        />
                    <Text
                        //onPress={() => {this.props.navigation.navigate("storepage")}}
                        style={{fontSize:15 ,
                        paddingTop: 10,
                        fontWeight: 'bold',
                        paddingBottom: 10,
                        fontFamily : "lalezar",
                        textAlign: "right"}} key={item.releaseYear}>{item.title}</Text>
                    </View>
                ))}
                </ScrollView>
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