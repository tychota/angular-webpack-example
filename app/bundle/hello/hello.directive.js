// I tried angular 2 style directive
// Angular does not accept a constructor but a factory function
// the static directiveFactory and the injection do the trick pretty well

import { HelloTemplate } from 'hello.template';
import { HelloController } from 'hello.controller';

export class HelloDirective {
  constructor($q) {
    this.restrict = 'E';
    this.scope = {};
    this.template = HelloTemplate;
    this.controller = HelloController;
    this.controllerAs = 'vm';

    this.$q = $q;
  }

  static directiveFactory($q) {
    HelloDirective.instance = new HelloDirective($q);
    return HelloDirective.instance;
  }
}

HelloDirective.directiveFactory.$inject = ['$q'];

export const registerHello = (ngModule) => {
  ngModule.directive('hello', HelloDirective.directiveFactory);
};
