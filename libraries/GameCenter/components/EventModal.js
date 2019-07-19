import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import CountDown from 'react-native-countdown-component';
import FadeInView from './FadeInView'
export default class EventModal extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.topview} source={require('../asset/modalbackground.jpg')}>
                <View style={{marginTop:20,marginBottom:30}} >
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text >
                    <FadeInView>
                        <View style={styles.giftview}>
                            <Text style={styles.gifttext}>{this.props.award}</Text>
                            <Image source={require('../asset/gift.png')} style={{width:54,height:54}} />
                        </View>
                    </FadeInView>
                    <FadeInView>
                        <View style={styles.giftview}>
                            <Text style={styles.gifttext}>{this.props.cost}</Text>
                            <Image source={require('../../../images/scoin.png')} style={{width:54,height:54}} />
                        </View>
                    </FadeInView>
                </View>
                <CountDown
                    until={this.props.time}
                    size={30}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{h: 'ساعت',m: 'دقیقه', s: 'ثانیه'}}
                />
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    topview: {
        width:'100%',
        height:'90%',
        justifyContent:'space-between'
    },
    title : {
        fontSize: 25,
        padding: 25,
        borderColor:'white',
        marginRight:10,
        marginLeft:10,
        textAlign: 'center',
        color: 'white'
    },
    description : {
        textAlign: 'center',
        fontSize: 20,
        color:'white'
    },
    giftview : {
        alignItems: 'center',
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'#ffe6cc',
        padding:15,
        margin:20
    },
    gifttext: {
        fontSize:25,
        marginRight:10,
        color: '#ff8c1a',
    }
});