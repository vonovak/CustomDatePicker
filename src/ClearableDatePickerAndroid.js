'use strict';

const ClearableDatePickerModule = require('react-native').NativeModules.ClearableDatePickerAndroid;

class ClearableDatePickerAndroid {

    static async open(options: Object): Promise<Object> {
        return ClearableDatePickerModule.open(options);
    }

    /**
     * Time has been selected.
     */
    static get dateSetAction() {
        return 'dateSetAction';
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

module.exports = ClearableDatePickerAndroid;