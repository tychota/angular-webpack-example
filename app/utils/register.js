import { registerHello } from '../bundle/hello/hello';

export const registerDirectives = (ngModule) => {
  registerHello(ngModule);
};

/* ************************************************ */

import { registerHelloService } from '../bundle/hello/hello.service.js';

export const registerService = (ngModule) => {
  registerHelloService(ngModule);
};

/* ************************************************ */

import { registerHelloKarmaTest } from '../bundle/hello/hello.spec.js';

export const registerTests = (ngModule) => {
  registerHelloKarmaTest(ngModule);
};
