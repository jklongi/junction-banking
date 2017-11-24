import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
  static navigationOptions = {
    title: 'Welcome to main',
  }
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>I AM MAIN</Text>
        <Button title="GO TO OTHER"
          onPress={() =>
            navigate('Other')
          }
        />
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
