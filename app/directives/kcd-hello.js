import kcdHelloTemplate from './kcd-hello.html';

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
    this.controllerAs = 'vm';
    this.controller = kcdHelloController;

    this.$q = $q;
  }

  static directiveFactory($q) {
    kcdHelloDirective.instance = new  kcdHelloDirective($q);
    return kcdHelloDirective.instance;
  }
}

kcdHelloDirective.directiveFactory.$inject = ['$q'];

export const registerKcdHello = (ngModule) =>  {
  ngModule.directive('kcdHello', kcdHelloDirective.directiveFactory)
}
