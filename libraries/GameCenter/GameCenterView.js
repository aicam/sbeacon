import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Modal, TouchableOpacity, Button, Image } from 'react-native';
import FadeInView from './components/FadeInView'
// You can import from local files
import AssetExample from './components/AssetExample';
import Ranking from './components/Ranking';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Event from './components/Event';
import EventModal from './components/EventModal'
export default class GameCenterView extends React.Component {
    constructor() {
        super();
        this.state = {ranking_title: ['1 month','1 week'], timer: 1, modalVisible: false};
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({timer: this.state.timer + 1});
        },5000)
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}  >
                        <EventModal />
                        <View style={{flexDirection:'row' }} >
                            <TouchableOpacity style={styles.modalbutton}>
                                <View >
                                    <Text style={{fontSize:20,color:'#d1e0e0',textAlign:'center'}}>شرکت در مسابقه</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.exitmodal}>
                                <View >
                                    <Text style={{fontSize:20,color:'#d1e0e0',textAlign:'center'}}>خروج</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                    <Card>
                        <AssetExample />
                    </Card>
                    <Card>
                        <Text style={styles.header}>Medals</Text>
                        <View style={{flexDirection:'row',marginTop:10,justifyContent:'center',paddingBottom:15}}>
                            <Image source={require('./assets/a1_1.png')} />
                        </View>
                    </Card>
                    <Card style={styles.splitUp}>
                        <FadeInView>
                            <Text style={styles.header}>{this.state.ranking_title[this.state.timer%2]}</Text>
                            <Ranking />
                            <Ranking />
                            <Ranking />
                        </FadeInView>
                    </Card>
                    <Card style={styles.splitUp}>
                        <Text style={styles.header}>Events</Text>
                        <FadeInView>
                            <ScrollView horizontal={true}>
                                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                    <Event />
                                </TouchableOpacity >
                                <Event />
                                <Event />
                                <Event />
                                <Event />
                                <Event />
                            </ScrollView>
                        </FadeInView>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    splitUp:{
        marginTop: 10
    },
    header : {
        textAlign: 'center',
        fontSize: 20,
        color: '#999999',
        borderWidth:0.5,
        padding: 12,
        margin: 10
    },
    modalbutton: {
        borderWidth:0.5,
        backgroundColor: '#344c4c',
        justifyContent: 'center',
        width:'50%',
        padding:20
    },
    exitmodal: {
        backgroundColor: '#344c4c',
        justifyContent: 'center',
        padding:20,
        width:'50%'
    }
});
