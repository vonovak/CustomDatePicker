package com.customdatepicker.modules;

import com.customdatepicker.modules.datePicker.DatePickerDialogModule;
import com.customdatepicker.modules.timePicker.TimePickerDialogModule;
import com.facebook.react.LazyReactPackage;
import com.facebook.react.bridge.ModuleSpec;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfoProvider;

import java.util.Arrays;
import java.util.List;

import javax.inject.Provider;

/**
 * Created by Administrator on 2017/9/15.
 */

public class CustomReactPackage extends LazyReactPackage {
    @Override
    public List<ModuleSpec> getNativeModules(final ReactApplicationContext reactContext) {
        ModuleSpec datePickerDialogModule = new ModuleSpec(DatePickerDialogModule.class, new Provider<NativeModule>() {
            @Override
            public NativeModule get() {
                return new DatePickerDialogModule(reactContext);
            }
        });
        ModuleSpec timePickerDialogModule = new ModuleSpec(TimePickerDialogModule.class, new Provider<NativeModule>() {
            @Override
            public NativeModule get() {
                return new TimePickerDialogModule(reactContext);
            }
        });
        return Arrays.asList(datePickerDialogModule, timePickerDialogModule);
    }

    @Override
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return null;
    }
}
