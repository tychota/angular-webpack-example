import angular from 'angular';
import { registerDirectives } from './directives';

const ngModule = angular.module('vote', []);

if (isTest) {
  require('angular-mocks/angular-mocks');
}

registerDirectives(ngModule);
