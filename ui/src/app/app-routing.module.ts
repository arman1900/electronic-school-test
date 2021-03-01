import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthGaurdService} from "./service/auth-gaurd.service";
import {AddStudentComponent} from "./add-student/add-student.component";


const routes: Routes = [{ path: 'login', component: LoginComponent },{ path: 'add', component: AddStudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
