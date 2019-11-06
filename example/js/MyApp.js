/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    NativeModules
} from 'react-native';
const {ClearableDatePicker, ClearableTimePicker} = NativeModules;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  x: string
};

export default class MyApp extends Component<Props> {

  componentDidMount() {
      ClearableDatePicker.open({
          hourOfDay: 3,
          minute: 5,
      }).then(({action, year, month, day}) => {
          console.log('action: ', action, ', year: ', year, ', month: ', month, ', day: ', day);
      });

      ClearableTimePicker.open({
          hourOfDay: 3,
          minute: 5,
          is24HourView: true
      }).then(({action, hour, minute}) => {
         console.log('action: ', action, ', hour: ', hour, ', minute: ', minute);
      });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
