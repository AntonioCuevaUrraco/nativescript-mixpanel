
# NativeScript Mixpanel
A NativeScript plugin to provide the ability to integrate with Mixpanel.

## Installation
From your command prompt/terminal go to your app's root folder and execute:

`tns plugin add nativescript-mixpanel`

## Usage

###


## Angular Native (NativeScript Angular) Usage

In main.ts add the following before you bootstrap

``` TS

import { init as mixpanelInit } from "nativescript-mixpanel";
mixpanelInit(YOUR_KEY_HERE);

```


## API

- **init(token: any)**
- **track(eventName: any, props?: any)**
- **timeEvent(eventName: any)**
- **identify(id: any, extraAtributes?: any)**
- **registerSuperProperties(props: any)**
- **addPushDeviceToken(token: any)()**
- **alias(alias: string)()**

### Contributors

- Antonio Cueva Urraco
- Blake Nussey
