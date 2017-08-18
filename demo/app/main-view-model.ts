import { Observable } from 'tns-core-modules/data/observable';
import { Mixpanel } from 'nativescript-mixpanel';

export class HelloWorldModel extends Observable {
  public message: string;
  private mixpanel: Mixpanel;

  constructor() {
    super();

    this.mixpanel = new Mixpanel();
    this.message = this.mixpanel.message;
  }
}
