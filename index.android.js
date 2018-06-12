/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Button, StyleSheet, View} from "react-native";
import DatePickerAndroid from "./src/DatePickerAndroid";
import TimePickerAndroid from "./src/TimePickerAndroid";

export default class ClearableDateTimePicker extends Component {

    openDatePicker = () => {
        DatePickerAndroid.open({
            date: new Date()
        }).then(({action, year, month, day}) => {
            console.log('Date picker action: ', action);
            if (action !== DatePickerAndroid.dismissedAction && action !== DatePickerAndroid.clearedAction) {
                console.log(`${year}-${month}-${day}`);
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    openTimePicker = () => {
        TimePickerAndroid.open({
            hourOfDay: 5,
            minute: 7,
            is24HourView: true
        }).then(({action, hourOfDay, minute}) => {
            console.log('Time picker action: ', action, ', hour: ', hourOfDay, ', minute: ', minute);
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="ShowDate" onPress={() => {
                    this.openDatePicker();
                }}/>
                <Button title="ShowTime" onPress={() => {
                    this.openTimePicker();
                }}/>
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

AppRegistry.registerComponent('ClearableDateTimePicker', () => ClearableDateTimePicker);
