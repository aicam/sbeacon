import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements'
export default class Ranking extends React.Component {
    constructor(){
        super();
        let medals = [
            [
                    {address: require('../../../images/medals/a1_1.png')},
                    {address: require('../../../images/medals/a1_2.png')},
                    {address: require('../../../images/medals/a1_3.png')},
                    {address: require('../../../images/medals/a1_4.png')},
                    {address: require('../../../images/medals/a1_5.png')},
                    {address: require('../../../images/medals/a1_6.png')},
                    {address: require('../../../images/medals/a1_7.png')},
                    {address: require('../../../images/medals/a1_8.png')},
                    {address: require('../../../images/medals/a1_9.png')},
                    {address: require('../../../images/medals/a1_10.png')}
                ],
             [
                    {address: require('../../../images/medals/a2_1.png')},
                    {address: require('../../../images/medals/a2_2.png')},
                    {address: require('../../../images/medals/a2_3.png')},
                    {address: require('../../../images/medals/a2_4.png')},
                    {address: require('../../../images/medals/a2_5.png')},
                    {address: require('../../../images/medals/a2_6.png')},
                    {address: require('../../../images/medals/a2_7.png')},
                    {address: require('../../../images/medals/a2_8.png')},
                    {address: require('../../../images/medals/a2_9.png')},
                    {address: require('../../../images/medals/a2_10.png')},
             ]
        ];
        this.state = {medals : medals};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagestyle}>
                    <Text>{this.props.rank}.  </Text>
                    <Image source={this.state.medals[this.props.mode][this.props.in].address} />
                </View>
                <Text style={styles.text} >{this.props.username}</Text>
                <Text style={styles.text} >{this.props.rate}</Text>
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
