'use strict';

import { NativeModules } from "react-native";

class ClearableDatePicker {

    static async open(options: Object): Promise<Object> {
        return NativeModules.ClearableDatePicker.open(options);
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

export { ClearableDatePicker };