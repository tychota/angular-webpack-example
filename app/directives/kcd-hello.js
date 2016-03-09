import kcdHelloKarmaTest from './kcd-hello.test.js';

import kcdHelloTemplate from './kcd-hello.html';
import './kcd-hello.css';



class kcdHelloController {
  constructor($interval) {
    this.greetings = "Hello Angular";
  }
}

// I tried angular 2 style directive
// Angular does not accept a constructor as the directive but rather
// a factory function
// the static directiveFactory and the injection do the trick pretty well
class kcdHelloDirective {
  constructor($q) {
    this.restrict = 'E';
    this.scope = {};
    this.template = kcdHelloTemplate;
    this.controller = kcdHelloController;
    this.controllerAs = 'vm';

    this.$q = $q;
  }

  static directiveFactory($q) {
    kcdHelloDirective.instance = new  kcdHelloDirective($q);
    return kcdHelloDirective.instance;
  }
}

kcdHelloDirective.directiveFactory.$inject = ['$q'];

export const registerKcdHello = (ngModule) =>  {
  if (isTest) {
    kcdHelloKarmaTest(ngModule);
  }
  ngModule.directive('kcdHello', kcdHelloDirective.directiveFactory)
}
