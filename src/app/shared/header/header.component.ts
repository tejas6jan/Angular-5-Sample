import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  news: string;
  constructor(private message: MessageService) { }
  @Input() pageTitle: string;
  ngOnInit() {
    this.message.news.subscribe(
      n =>this.news = n
    );
  }
  headerNews(){
      this.message.sendNews('Header News');
  }

}
