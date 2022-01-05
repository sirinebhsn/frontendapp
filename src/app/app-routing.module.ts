import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { CrudempComponent } from './crudemp/crudemp.component';


const routes: Routes =[
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'loginsuccess', component:CrudempComponent},
  {path:'registration', component:RegistrationComponent}
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
