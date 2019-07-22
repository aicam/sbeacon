import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Modal,
    TouchableOpacity,
    Button,
    Image,
    AsyncStorage,
    ImageBackground,
    Alert
} from 'react-native';

const fetch = require('react-native-cancelable-fetch');
import FadeInView from './components/FadeInView';
import LinearGradient from 'react-native-linear-gradient';
// You can import from local files
import PageTtile from './components/PageTitle';
import Ranking from './components/Ranking';
// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';
import Event from './components/Event';
import EventModal from './components/EventModal'
import HeaderView from "../HeaderView";

export default class GameCenterView extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: < HeaderView navigation={
                navigation
            }
            />,
            headerLeft: null
        }
    };

    constructor() {
        super();
        this.state = {
            ranking_title: ['برترین های ماه', 'برترین های هفته'], timer: 1, modalVisible: false,
            medals: '',
            loaded: false,
            username: '',
            monthly_rank: [],
            weekly_rank: [],
            events: [],
            event_index: 0,
        };

    }

    _setStatEevent(event) {
        this.setState({event_index: event});
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    async getUsername() {
        try {
            let token = await AsyncStorage.getItem('username');
            return token;
        } catch (error) {
            Alert.alert(error.toString());
        }
    }

    _setUsername(user) {
        this.setState({username: user});
    }

    async componentDidMount() {
        setInterval(() => {
            this.setState({timer: this.state.timer + 1});
        }, 5000);
        const username = await this.getUsername();
        this._setUsername(username);
        fetch('http://parsbeacon.ir/requests/games?username=' + username, null, this).then(response => {
            console.log(username);
            response.json().then(async responseJson => {
                await this.setState({
                    medals: responseJson.medals,
                    weekly_rank: responseJson.weekly_rates,
                    monthly_rank: responseJson.month_rates,
                    events: responseJson.events
                });
                this.setState({loaded: true});
            });
        }).catch(e => {
            alert(e.toString())
        });
    }

    attend() {
        fetch('http://parsbeacon.ir/requests/add_to_event?username=' + this.state.username + '&event_id=' + this.state.events[this.state.event_index].id,
            null, this).then(
            response => response.json().then(responseJson => {
                this.setModalVisible(false);
                if (responseJson.status) {
                    alert("شما با موفقیت در مسابقه شرکت کردید.پس از اتمام مسابقه جایزه و اطلاعیه آن برای شما ارسال می گردد");
                } else {
                    alert("شما قبلا در این مسابقه ثبت نام کردید");
                }
            })
        ).catch(e => {
            alert(e.toString())
        });
    }

    componentWillUnmount(): void {
        fetch.abort(this);
    }

    render() {
        return (
            <ImageBackground source={require('../../images/gamecenter_background.png')} style={styles.container}>
                {this.state.loaded &&
                <ScrollView>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}>
                        <EventModal title={this.state.events[this.state.event_index].title}
                                    description={this.state.events[this.state.event_index].description}
                                    award={this.state.events[this.state.event_index].award}
                                    cost={this.state.events[this.state.event_index].cost}
                                    time={parseInt(this.state.events[this.state.event_index].end_time) - this.state.timer * 5}/>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.modalbutton} onPress={() => this.attend()}>
                                <View>
                                    <Text style={{fontSize: 20, color: '#d1e0e0', textAlign: 'center'}}>شرکت در
                                        مسابقه</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.exitmodal} onPress={() => this.setModalVisible(false)}>
                                <View>
                                    <Text style={{fontSize: 20, color: '#d1e0e0', textAlign: 'center'}}>خروج</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                    <Card style={[styles.cardStyles, {marginBottom: 35}]}>
                        <LinearGradient colors={['#fc00ff', '#00dbde']} start={{x: 1, y: 0}} end={{x: 0, y: 1}}>
                            <PageTtile/>
                        </LinearGradient>
                    </Card>
                    <Card style={[styles.cardStyles]}>
                        <LinearGradient colors={['#fc4a1a', '#f7b733']} start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                            <Text style={styles.header}>مدال ها</Text>
                        </LinearGradient>
                    </Card>
                    <Card style={[styles.cardStyles, {marginTop: 8}]}>
                        <View
                            style={{flexDirection: 'row', marginTop: 10, justifyContent: 'center', paddingBottom: 15}}>
                            {this.state.medals.map((item, index) => <Image style={{width: 35, height: 35}}
                                                                           source={{uri: item.toString()}}
                                                                           key={index}/>)}
                        </View>
                    </Card>
                    <Card style={[styles.splitUp, styles.cardStyles]}>
                        <FadeInView>
                            <LinearGradient
                                colors={[this.state.timer % 2 === 0 ? '#52c234' : '#1CB5E0', this.state.timer % 2 === 0 ? '#061700' : '#000046']}
                                start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                                <Text style={styles.header}>{this.state.ranking_title[this.state.timer % 2]}</Text>
                            </LinearGradient>
                        </FadeInView>
                    </Card>
                    <Card style={[styles.cardStyles, {marginTop: 8}]}>
                        {this.state.timer % 2 === 1 && this.state.weekly_rank.map((item, index) =>
                            <Ranking username={item.username.toString()}
                                     rate={item.rate.toString()}
                                     rank={item.counter.toString()}
                                     mode={0}
                                     in={index}
                                     key={index}/>
                        )}
                        {this.state.timer % 2 === 0 && this.state.monthly_rank.map((item, index) =>
                            <Ranking username={item.username.toString()}
                                     rate={item.rate.toString()}
                                     rank={item.counter.toString()}
                                     mode={1}
                                     in={index}
                                     key={index}/>
                        )}
                    </Card>
                    <Card style={[styles.splitUp, styles.cardStyles]}>
                        <LinearGradient colors={['#C04848', '#480048']} start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
                            <Text style={styles.header}>مسابقات</Text>
                        </LinearGradient>
                    </Card>
                    <Card style={[styles.cardStyles, {marginTop: 8}]}>
                        <FadeInView>
                            <ScrollView horizontal={true}>
                                {this.state.events.map((item, index) =>
                                    <TouchableOpacity onPress={() => {
                                        this._setStatEevent(index);
                                        this.setModalVisible(true);
                                    }}>
                                        <Event title={item.title}
                                               award={item.award}
                                               time={item.end_time.toString()}/>
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </FadeInView>
                    </Card>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('webview', {url: 'http://beacongameserver.ir/index.html?username=' + this.state.username})}>
                        <Card style={[styles.cardStyles, {marginTop: 15}]}>
                            <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} start={{x: 0, y: 0}}
                                            end={{x: 0, y: 1}}>
                                <Text style={styles.header}>شروع بازی</Text>
                            </LinearGradient>
                        </Card>
                    </TouchableOpacity>
                </ScrollView>
                }
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        padding: 8,
    },
    splitUp: {
        marginTop: 40
    },
    header: {
        fontFamily: 'IRANSansMobile',
        textAlign: 'center',
        fontSize: 23,
        color: 'white',
        padding: 5,
        margin: 10
    },
    cardStyles: {
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#EEEEEE'
    },
    modalbutton: {
        borderWidth: 0.5,
        backgroundColor: '#344c4c',
        justifyContent: 'center',
        width: '50%',
        padding: 20
    },
    exitmodal: {
        backgroundColor: '#344c4c',
        justifyContent: 'center',
        padding: 20,
        width: '50%'
    }
});
