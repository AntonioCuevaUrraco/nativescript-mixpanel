
# NativeScript Mixpanel
A NativeScript plugin to provide the ability to integrate with Mixpanel.

## Installation
From your command prompt/terminal go to your app's root folder and execute:

`tns plugin add nativescript-mixpanel`

## Usage

###
```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:VideoPlayer="nativescript-videoplayer">
        <StackLayout>
               
            <VideoPlayer:Video id="nativeVideoPlayer"
            controls="true" finished="{{ videoFinished }}"
            loop="true" autoplay="false" height="280" 
            src="~/videos/big_buck_bunny.mp4" />

            <!-- Remote file to test with https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 -->
            
        </StackLayout>
</Page>
```

## Angular Native (NativeScript Angular) Usage

In main.ts add the following before you bootstrap

``` TS

import { init as mixpanelInit } from "nativescript-mixpanel";
mixpanelInit(YOUR_KEY_HERE);

```


## API

- **init(token: any)**Ï
- **track(eventName: any, props?: any)**Ï
- **timeEvent(eventName: any)**Ï
- **identify(id: any, extraAtributes?: any)**Ï
- **registerSuperProperties(props: any)**Ï
- **addPushDeviceToken(token: any)()**Ï

### Contributors

- Antonio Cueva Urraco
- Blake Nussey
