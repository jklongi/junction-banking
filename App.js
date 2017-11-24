import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Main from './src/Views/Main'
import Other from './src/Views/Other'

export default class App extends React.Component {
  render() {
    return (
      <Navigation />
    )
  }
}

const Navigation = StackNavigator({
  Main: { screen: Main },
  Other: { screen: Other },
})
