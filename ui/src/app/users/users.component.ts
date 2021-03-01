import { Component, OnInit, Input } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private appService: AppService) { }
  userCount = 0;
  @Input() users: any[];

  ngOnInit(): void {
  }
  deleteUser(id){
    this.appService.deleteUser(id).subscribe((users: any[]) => {
      this.userCount = this.userCount - 1;
      this.userCount = users.length;
      this.users = users;
    });
  }
}
