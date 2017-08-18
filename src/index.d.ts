import {Common} from './mixpanel.common';

export declare class MixpanelHelper extends Common {
    // define your typings manually
    // or..
    // take the ios or android .d.ts files and copy/paste them here
    static init(token: any): void;

    track(eventName: any, props: any): void;

    timeEvent(eventName: any): void;

    identify(id: any, extraAtributes?: any): void;

    registerSuperProperties(props: any): void;

    addPushDeviceToken(token: any): void;

    alias(alias: string): void;
}
