import * as applicationModule from "application";

let mixpanel;

export function init(token) {
    let activity = applicationModule.android.foregroundActivity || applicationModule.android.startActivity;
    if (token) {
        if (com.mixpanel && activity) {
            mixpanel = com.mixpanel.android.mpmetrics.MixpanelAPI.getInstance(activity, token + "");
        }
        else {
            console.log("MIXPANEL PLUGIN: We can not find the mixpanil lib, make sure is added during building");
        }
    }
    else {
        console.log("MIXPANEL PLUGIN: You need to pass some token to init");
    }
}

export function identify(id, extraAtributes?) {
    if (mixpanel) {
        if (id) {
            mixpanel.identify(id + "");
            mixpanel.getPeople().identify(id + "");
            if (extraAtributes) {
                for (let key in extraAtributes) {
                    mixpanel.getPeople().set(key + "", extraAtributes[key] + "");
                }
            }
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to pass some id");
        }
    }
    else {
        console.log("MIXPANEL PLUGIN: You need to init first");
    }
}

export function track(eventName, props) {
    if (mixpanel) {
        if (eventName) {
            if (props) {
                let androidProps = new org.json.JSONObject();
                for (let key in props) {
                    androidProps.put(key + "", props[key] + "");
                }
                mixpanel.track(eventName + "", androidProps);
                mixpanel.flush();
            }
            else {
                mixpanel.track(eventName + "");
                mixpanel.flush();
            }
        }
        else {
            console.log("MIXPANEL PLUGIN: What do you want to track?");
        }
    }
    else {
        console.log("MIXPANEL PLUGIN: You need to init first");
    }
}

export function registerSuperProperties(props) {
    if (mixpanel) {
        if (props) {
            let androidProps = new org.json.JSONObject();
            for (let key in props) {
                androidProps.put(key + "", props[key] + "");
            }
            mixpanel.registerSuperProperties(androidProps);
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to pass some JSON array");
        }
    }
    else {
        console.log("MIXPANEL PLUGIN: You need to init first");
    }
}

export function addPushDeviceToken(token) {
    if (mixpanel) {
        mixpanel.getPeople().initPushHandling(token + "");
    }
    else {
        console.log("MIXPANEL PLUGIN: You need to init first");
    }
}

