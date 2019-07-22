import * as React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

export default class EventCard extends React.Component {

    constructor() {
        super();
        this.state = {
            txt: ''
        }

    }

    setStatus(s, e) {
        let temp = s.split(" ");
        let temp2 = temp[0] + "T" + temp[1];
        let temp3 = e.split(" ");
        let temp4 = temp3[0] + "T" + temp3[1];
        // console.log(temp2.toString());
        // console.log(temp4.toString());
        let dateS = new Date(temp2);
        let dateE = new Date(temp4);
        let date = new Date(Date());
        console.log(date.toString());
        console.log(dateS.toString());
        console.log(dateE.toString());
        if (date > dateE) {
            this.setState({txt: "به پایان رسیده است"});
        } else if (date < dateS) {
            this.setState({txt: "شروع نشده است"});
        } else {
            this.setState({txt: "در حال برگزاری می باشد"});
        }
    }

    componentDidMount() {
        this.setStatus(this.props.start_time, this.props.end_time)
    }

    render() {
        return (
            <ImageBackground source={require('../../../images/card-background.jpg')}
                             style={[{width: '100%'}, styles.container]}>
                <Text style={[styles.paragraph, {fontSize: 30, margin: 15}]}>
                    {this.props.title}
                </Text>
                <Text style={styles.paragraph}>
                    امتیاز   {this.props.score}
                </Text>
                <Text style={styles.paragraph}>
                    رتبه    {this.props.player_rank}
                </Text>
                <Text style={styles.paragraph}>
                    {this.state.txt}
                </Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#000',
        marginBottom: 10
    },
    paragraph: {
        color: '#FFFFFF',
        margin: 8,
        fontSize: 20,
        fontFamily:'IRANSansMobile',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
