import { Component, OnInit } from '@angular/core';
import { Users, Task } from './users';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedUser: Users;
  title = 'Dashboard';
  users: Users[] = [{
    name: 'john',
    salary: 50000,
    designation: 'dev',
    tasks: [{ name: 'ui', desc: 'user interface' }]
  },
  {
    name: 'jerry',
    salary: 60000,
    designation: 'lead'
  }
  ];


  constructor(private message: MessageService) {
    this.selectedUser = this.users[0];
  }
  ngOnInit() {
  }
  userInfo(user: Users) {
    this.selectedUser = user;
  }
  userDel(user: Users) {
    this.users = this.users.filter((u: Users) => {
      return u.name !== user.name;
    });
  }
  delTask(task: Task) {
    this.users.map((user: Users) => {
      if (this.selectedUser.name === user.name) {
        user.tasks = user.tasks.filter((ut: Task) => {
          return ut.desc !== task.desc;
        });
      }
    });
  }

  addTask(taskName: string) {
    this.users.map((user: Users) => {
      if (this.selectedUser.name === user.name) {
        user.tasks.push({ name: taskName, desc: taskName });
      }
    });
  }
  sendNews() {
    this.message.sendNews('New weather report');
  }
}
