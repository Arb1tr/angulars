/**
 * Created by arb1tr on 10/12/17.
 */
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface GlobalEvent {
  key: any;
  data?: any;
}

export default class EventsService {

  private static instance: EventsService = null;

  private eventBus: Subject<GlobalEvent>;

  constructor() {
    this.eventBus = new Subject<GlobalEvent>();
  }

  public static getInstance() {
    /*@ngInject*/
    if (!EventsService.instance) {
      EventsService.instance = new EventsService();
    }
    return EventsService.instance;
  }

  public on<T> (key: string): Observable<T> {
    return this.eventBus
      .asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }

  public trigger (key: string, data: any) {
    this.eventBus.next({key, data});
  }
}