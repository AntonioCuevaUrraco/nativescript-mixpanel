import {Common} from './mixpanel.common';

export declare class MixpanelHelper extends Common {
    // define your typings manually
    // or..
    // take the ios or android .d.ts files and copy/paste them here
    static init(token: any): void;

    static track(eventName: any, props: any): void;

    static timeEvent(eventName: any): void;

    static identify(id: any, extraAtributes?: any): void;

    static registerSuperProperties(props: any): void;

    static addPushDeviceToken(token: any): void;

    static alias(alias: string): void;

    static reset(): void;

    static flush(): void;
}
