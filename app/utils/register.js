import { registerHello } from '../bundle/hello/hello';

export const registerDirectives = (ngModule) => {
  registerHello(ngModule);
};

/* ************************************************ */

import { registerHelloKarmaTest } from '../bundle/hello/hello.spec.js';

export const registerTests = (ngModule) => {
  registerHelloKarmaTest(ngModule);
};
