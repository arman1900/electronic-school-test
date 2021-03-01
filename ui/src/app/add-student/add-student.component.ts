import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AppService} from "../app.service";
import { remove as _remove } from 'lodash-es';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private appService: AppService) { }
  userForm = new FormGroup({
    firstname: new FormControl('', Validators.nullValidator && Validators.required),
    login: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required),
    secondname: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    this.appService.addUser(this.userForm.value, this.userCount + 1).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.userCount = this.userCount + 1;
      console.log(this.userCount);
      this.userForm.reset();
    });
  }

  getAllUsers() {
    this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
      this.userCount = users.length;
      this.users = users;
    });
  }



  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
