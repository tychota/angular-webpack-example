import HelloTemplate from './hello.html';
import './hello.css';

class HelloController {
  constructor($interval) {
    this.greetings = 'Hello Angular';
    this.$interval = $interval;
  }
}

// I tried angular 2 style directive
// Angular does not accept a constructor as the directive but rather
// a factory function
// the static directiveFactory and the injection do the trick pretty well
class HelloDirective {
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
