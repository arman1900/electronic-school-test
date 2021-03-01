import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers(){
    return this.http.get(this.rootURL + '/all');
  }
  addUser(user: any, id: number) {
    user.id = id;
    return this.http.post(this.rootURL + '/add', user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.rootURL+ '/delete'+'/'+id);
  }

}
