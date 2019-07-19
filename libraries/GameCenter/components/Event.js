import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import CountDown from 'react-native-countdown-component';
export default class Event extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{borderWidth:0.5,padding:15,borderRadius:15,backgroundColor:'#f2f2f2'}}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.award}>{this.props.award}</Text>
                    <CountDown
                        until={this.props.time}
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