import { Common } from './mixpanel.common';

declare var Mixpanel: any;

let mixpanel;

export class MixpanelHelper extends Common {

    constructor() {
        super();
    }


    static init(token) {
        if (token) {
            if (Mixpanel) {
                Mixpanel.sharedInstanceWithToken(token);
                mixpanel = Mixpanel.sharedInstance();
            }
            else {
                console.log("MIXPANEL PLUGIN: We can not find the cocoapod, make sure is added during building");
            }
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to pass some token to init");
        }
    }

    static track(eventName, props?) {
        if (mixpanel) {
            if (eventName) {
                let _eventName = eventName + "";
                if (props) {
                    let iosPropsMutable = NSMutableDictionary.alloc().init();
                    for (let key in props) {
                        iosPropsMutable.setObjectForKey(props[key] + "", key + "");
                    }
                    let iosProps = NSDictionary.dictionaryWithDictionary(iosPropsMutable);
                    mixpanel.trackProperties(_eventName, iosProps);
                }
                else {
                    mixpanel.track(_eventName);
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
        else {
            console.log("MIXPANEL PLUGIN: You need to init first");
        }
    }

    static identify(id, extraAtributes?) {
        if (mixpanel) {
            if (id) {
                let _id = id + "";
                mixpanel.identify(_id);
                if (extraAtributes) {
                    let iosPropsMutable = NSMutableDictionary.alloc().init();
                    for (let key in extraAtributes) {
                        iosPropsMutable.setObjectForKey(extraAtributes[key] + "", key + "");
                    }
                    let iosProps = NSDictionary.dictionaryWithDictionary(iosPropsMutable);
                    mixpanel.people.set(iosProps);
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

    static registerSuperProperties(props) {
        if (mixpanel) {
            if (props) {
                let iosPropsMutable = NSMutableDictionary.alloc().init();
                for (let key in props) {
                    iosPropsMutable.setObjectForKey(props[key] + "", key + "");
                }
                let iosProps = NSDictionary.dictionaryWithDictionary(iosPropsMutable);
                mixpanel.registerSuperProperties(iosProps);
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
            mixpanel.people.addPushDeviceToken(token + "");
        }
        else {
            console.log("MIXPANEL PLUGIN: You need to init first");
        }
    }

    static alias(alias) {
        if (mixpanel) {
            if (alias) {
                const _alias = alias + "";
                mixpanel.createAliasForDistinctID(_alias, mixpanel.distinctId);
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



