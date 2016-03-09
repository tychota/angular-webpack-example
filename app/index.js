
import angular from 'angular';
import { registerDirectives, registerTests } from './utils/register';

import 'bulma/css/bulma.min.css';
import './index.css';


const ngModule = angular.module('vote', []);

if (isTest) { // eslint-disable-line no-undef
  require('angular-mocks/angular-mocks');
  registerTests(ngModule);
}

registerDirectives(ngModule);
