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
        template: `<div><button ng-click="vm.activate()">ololo</button></div>`,
        controller: 'AppController',
        controllerAs: 'vm'
      }
    });

    app.controller('AppController', AppController);

    angular.bootstrap(document, ['app']);
  });
}

/* @ngInject */
function AppController (eventsService, $interval) {
  var vm = this;

  vm.activate = activate;

  function activate () {
    eventsService.on('test')
      .subscribe(function () {
        console.log('Works!!!');
      });

    $interval(testTrigger, 1000);
  }

  function testTrigger () {
    eventsService.trigger('test')
  }
}