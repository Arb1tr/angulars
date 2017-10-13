/**
 * Created by arb1tr on 10/12/17.
 */
import angular from 'angular';
import '../dist/core.bundle.min';

initialize();

function initialize () {
  angular.element(document).ready(function () {
    var app = angular.module('app', [
      'core.module'
    ])

    app.directive('appComponent', function () {
      return {
        restrict: 'E',
        template: `<div><button ng-click="vm.trigger()">ololo</button></div>`,
        controller: 'AppController',
        controllerAs: 'vm'
      }
    });

    app.controller('AppController', AppController);

    angular.bootstrap(document, ['app']);
  });
}

/* @ngInject */
function AppController (eventsService) {
  var vm = this;

  vm.trigger = eventsService.trigger;
}