'use strict';

const ClearableTimePickerModule = require('react-native').NativeModules.ClearableTimePickerAndroid;

class ClearableTimePickerAndroid {

    static async open(options: Object): Promise<Object> {
        return ClearableDatePickerModule.open(options);
    }

    /**
     * A date has been selected.
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

    static get clearedAction() {
        return 'clearedAction';
    }
}

module.exports = ClearableTimePickerAndroid;