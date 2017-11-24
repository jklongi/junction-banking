import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Other extends React.Component {
  static navigationOptions = {
    title: 'Welcome to other',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>i AM OTHER</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
