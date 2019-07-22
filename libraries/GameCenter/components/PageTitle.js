import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class PageTitle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Game Center
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  paragraph: {
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
});
