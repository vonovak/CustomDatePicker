/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, Button, StyleSheet, View} from "react-native";
import DatePickerAndroid from "./src/DatePickerAndroid";

export default class CustomDatePicker extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="ShowDate" onPress={() => {
                    DatePickerAndroid.open({
                        date: new Date()
                    }).then(({action, year, month, day}) => {
                        if (action !== DatePickerAndroid.dismissedAction) {
                            console.log(`${year}-${month}-${day}`);
                        }
                    }).catch((err) => {
                        console.log(err);
                    });

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

AppRegistry.registerComponent('CustomDatePicker', () => CustomDatePicker);
