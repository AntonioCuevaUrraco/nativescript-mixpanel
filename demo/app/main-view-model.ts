import { Observable } from 'tns-core-modules/data/observable';
import { MixpanelHelper } from 'nativescript-mixpanel';

export class HelloWorldModel extends Observable {

  constructor() {
    super();

    console.log("TODO use your token");
    MixpanelHelper.init("TODO use your token");
  }
}
