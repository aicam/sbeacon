import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements'
export default class Ranking extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagestyle}>
                    <Text>1.  </Text>
                    <Image source={require('../asset/a1_1.png')} />
                </View>
                <Text style={styles.text} >aicam</Text>
                <Text style={styles.text} >4256</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginRight:18,
        marginLeft:18,
    },
    text: {

    },
    imagestyle: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
});
