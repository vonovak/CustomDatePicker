'use strict';

import { NativeModules } from "react-native";

class ClearableTimePicker {

    static async open(options: Object): Promise<Object> {
        return NativeModules.ClearableTimePicker.open(options);
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

export { ClearableTimePicker };