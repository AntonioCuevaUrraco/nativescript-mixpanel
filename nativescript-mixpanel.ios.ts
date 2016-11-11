let mixpanel;

export function init(token) {
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

export function track(eventName, props?) {
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

export function identify(id, extraAtributes?) {
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

export function registerSuperProperties(props) {
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

export function addPushDeviceToken(token) {
    if (mixpanel) {
        mixpanel.people.addPushDeviceToken(token + "");
    }
    else {
        console.log("MIXPANEL PLUGIN: You need to init first");
    }
}
