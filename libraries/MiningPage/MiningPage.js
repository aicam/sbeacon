import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    WebView,
    ImageBackground,
    Animated,
    TouchableOpacity,
    ScrollView,
    Image,
    AsyncStorage, Alert
} from 'react-native';
class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    };

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 3000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}
export default class MiningPage extends React.Component {
    constructor(){
        super();
        this.state = {
            backgrounds : require('../../images/001.jpg'),
            down : 0.1,
            username : "",
            img : 1
        }
    }
    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error.toString());
        }
    }
    _set_username(username){
        this.setState({username:username})
    }
    async componentDidMount(){
        let username = await this.getUsername();
        await this._set_username(username);
        setInterval(() => {
            this._set_state()
        },3000);
    }
    _set_state(){
        if(this.state.img < 9){
            let imn = this.state.img + 1;
            this.setState({img : imn})
        }else{
            this.setState({img : 1})
        }
        let bc = (this.state.img == 1 ) ? require('../../images/001.jpg') :
            (this.state.img == 2 ) ? require('../../images/002.jpg') :
                (this.state.img == 3 ) ? require('../../images/003.jpg') :
                    (this.state.img == 4 ) ? require('../../images/004.jpg') :
                        (this.state.img == 5 ) ? require('../../images/005.jpg') :
                            (this.state.img == 6 ) ? require('../../images/006.jpg') : require('../../images/001.jpg');
        this.setState({backgrounds : bc})

    }

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView>
                    <ImageBackground source={this.state.backgrounds} style={{resizeMethod: 'scale'}}>
                        <View style={{flexDirection:'column',justifyContent:'space-between',marginTop:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:200}}>
                                <TouchableOpacity style={{marginTop:20}} onPress={() => this.props.navigation.navigate('webview',{url : 'http://parsbeacon.ir/requests/vote?username=' + this.state.username})}>
                                    <ImageBackground source={require('../../images/vote_background.png')} style={{height:120,width:120,marginLeft:10}} >
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop:20}}
                                                  onPress={() => this.props.navigation.navigate('gamecenter')}>
                                    <ImageBackground source={require('../../images/game_background.png')} style={{height:120,width:120,marginRight:10}} >
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:100}}>
                                <TouchableOpacity style={{marginTop:20}}
                                                  onPress={() => this.props.navigation.navigate('webview',{url : 'http://parsbeacon.ir/requests/quiz?username=' + this.state.username})}>
                                    <ImageBackground source={require('../../images/my_quiz.png')} style={{height:120,width:120,marginLeft:10}} >
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop:20}} onPress={() => this.props.navigation.navigate('webview',{url : 'http://parsbeacon.ir/requests/others?username=' + this.state.username})}>
                                    <ImageBackground source={require('../../images/others_background.png')} style={{height:120,width:120,marginRight:15}}>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
                <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',borderWidth:0.5,borderColor:"#707070"}}>
                    <View style={{flexDirection:'row',height:50,backgroundColor:'#f8f8f8',width:'100%'}}>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('Firstpage')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/home.png')} style={{height:24,width:24,marginTop:7}} />
                                <Text style={{fontSize: 10}}>خانه</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('category')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/category.png')} style={{height:24,width:24,marginTop:7}} />
                                <Text style={{fontSize: 10}}>دسته بندی</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('miningpage')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/mining_active.png')} style={{height:24,width:24,marginTop:7}} />
                                <Text style={{fontSize: 10}}>حفاری</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('profile')}>
                            <View style={styles.footerViews}>
                                <Image source={require('../../images/Footer/profile.png')} style={{height:24,width:24,marginTop:7}} />
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