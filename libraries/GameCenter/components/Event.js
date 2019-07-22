import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import CountDown from 'react-native-countdown-component';
import LinearGradient from "react-native-linear-gradient";
export default class Event extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={['#bdc3c7', '#2c3e50']} start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={{borderRadius:15}}>
                <View style={{padding:15,borderRadius:15}}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.award}>{this.props.award}</Text>
                    <CountDown
                        until={parseInt(this.props.time)}
                        size={15}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{m: null, s: null}}
                    />
                </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize:20,
        textAlign: 'center'
    },
    award:{
        fontSize:17,
        margin:10,
        textAlign: 'center'
    }
});