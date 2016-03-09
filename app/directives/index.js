import { registerKcdHello } from './kcd-hello';

export const registerDirectives = (ngModule) => {
  registerKcdHello(ngModule);
}
