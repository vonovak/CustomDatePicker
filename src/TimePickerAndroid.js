'use strict';

const TimePickerModule = require('react-native').NativeModules.ClearableTimePickerAndroid;

/**
* The available keys for the `options` object are:
    *
*   - `hourOfDay`
*   - `minute`
*   - `is24HourFormat`
*/
class TimePickerAndroid {

    static async open(options: Object): Promise<Object> {
        return TimePickerModule.open(options);
    }

    /**
     * Time has been selected.
     */
    static get timeSetAction() {
        return 'timeSetAction';
    }

    /**
     * The dialog has been dismissed.
     */
    static get dismissedAction() {
        return 'dismissedAction';
    }

    /**
     * "Clear" has been pressed.
     */
    static get clearedAction() {
        return 'clearedAction';
    }
}

module.exports = TimePickerAndroid;
