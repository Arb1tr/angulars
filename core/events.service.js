/**
 * Created by arb1tr on 10/12/17.
 */
export default class EventsService {

  on () {
    console.log('on');
  }

  trigger () {
    console.log('trigger');
  }

  static getInstance() {
    /*@ngInject*/
    if (!EventsService.instance) {
      EventsService.instance = new EventsService();
    }
    return EventsService.instance;
  }
}