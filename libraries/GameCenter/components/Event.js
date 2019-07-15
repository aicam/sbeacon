import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import CountDown from 'react-native-countdown-component';
export default class Event extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{borderWidth:0.5,padding:15,borderRadius:15}}>
                    <Text style={styles.title}>title</Text>
                    <Text style={styles.award}>award</Text>
                    <CountDown
                        until={10}
                        size={15}
                        timeToShow={['H', 'M', 'S']}
                        timeLabels={{m: null, s: null}}
                    />
                </View>
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
        fontSize:25,
        textAlign: 'center'
    },
    award:{
        fontSize:20,
        margin:10,
        textAlign: 'center'
    }
});