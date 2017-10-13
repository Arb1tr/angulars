/**
 * Created by arb1tr on 10/12/17.
 */
import angular from 'angular';
import network from './network.module';
import EventsService from './events.service';

const core = angular.module('core.module', [
  network.name
]);

core.factory('eventsService', EventsService.getInstance);