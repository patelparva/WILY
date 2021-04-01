import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Search from './screens/Search';
import Transaction from './screens/Transaction';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Screen1:{screen:Search},
  Screen2:{screen:Transaction}
})

const AppContainer=createAppContainer(TabNavigator)