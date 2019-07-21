import * as React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

export default class EventCard extends React.Component {

    static setStatus(s, e) {
        let temp = s.split(" ");
        let temp2 = temp[0] + "T" + temp[1];
        let temp3 = e.split(" ");
        let temp4 = temp3[0] + "T" + temp3[1];
        console.log(temp2.toString());
        console.log(temp4.toString());
        let dateS = new Date(temp2);
        let dateE = new Date(temp4);
        let date = new Date().getDate();
        console.log(date.toString());
        console.log(dateS.toString());
        console.log(dateE.toString())
    }

    componentDidMount() {
        EventCard.setStatus(this.props.start_time, this.props.end_time)

    }

    render() {
        return (
            <ImageBackground source={require('../../../images/card-background.jpg')}
                             style={[{width: '100%', height: '100%'}, styles.container]}>
                <Text style={styles.paragraph}>
                    title {this.props.title}
                </Text>
                <Text style={styles.paragraph}>
                    rate {this.props.score}
                </Text>
                <Text style={styles.paragraph}>
                    rank {this.props.player_rank}
                </Text>
                <Text style={styles.paragraph}>
                    status
                </Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        color: '#FFFFFF',
        margin: 12,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
