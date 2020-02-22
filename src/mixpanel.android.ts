import { Common } from './mixpanel.common';
import * as app from 'tns-core-modules/application';
declare var com;

let mixpanel;

export class MixpanelHelper extends Common {

    constructor() {
        super();
    }

    static init(token) {
        const context = app.android.context;
        if (token) {
            if (com.mixpanel && context) {
                mixpanel = com.mixpanel.android.mpmetrics.MixpanelAPI.getInstance(context, token + "");
            }
            else {
                console.log("MIXPANEL PLUGIN: We can not find the mixpanel lib, make sure is added during building");
            }
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to pass some token to init");
        }
    }

    static identify(id, extraAtributes?) {
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

    static track(eventName, props) {
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

    static timeEvent(eventName) {
        if (mixpanel) {
            if (eventName) {
                const _eventName = eventName + "";
                mixpanel.timeEvent(_eventName);
            }
        }
    }

    static registerSuperProperties(props) {
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

    static addPushDeviceToken(token) {
        if (mixpanel) {
            mixpanel.getPeople().initPushHandling(token + "");
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to init first");
        }
    }

    static alias(alias) {
        if (mixpanel) {
            if (alias) {
                const _alias = alias + "";
                mixpanel.alias(_alias, null);
            }
            else {
                console.log("MIXPANEL PLUGIN: You need to pass an alias");
            }
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to init first");
        }
    }

    static reset() {
        if (mixpanel) {
            mixpanel.reset();
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to init first");
        }
    }

    static flush() {
        if (mixpanel) {
            mixpanel.flush();
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to init first");
        }
    }
}
