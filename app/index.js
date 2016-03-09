import angular from 'angular';
import { registerDirectives } from './directives';

const ngModule = angular.module('vote', []);

registerDirectives(ngModule);
