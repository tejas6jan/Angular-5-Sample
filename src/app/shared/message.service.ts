import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {

  constructor() { }
  news = new BehaviorSubject('');
  sendNews(value) {
    this.news.next(value);
  }

}
