import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareListComponent } from './software-list/software-list.component';
import { CreateSoftwareComponent } from './create-software/create-software.component';
import { UpdateSoftwareComponent } from './update-software/update-software.component';
import { SoftwareDetailsComponent } from './software-details/software-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './auth-gaurd.service';
import { HomePageComponent } from './home-page/home-page.component';
import {SignupComponent } from './signup/signup.component';
import {ContactusComponent} from './contactus/contactus.component';
const routes: Routes = [
  {path: 'softwares', component: SoftwareListComponent ,canActivate:[AuthGaurdService]},
  {path: 'create-software', component: CreateSoftwareComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'update-software/:id', component: UpdateSoftwareComponent,canActivate:[AuthGaurdService]},
  {path: 'software-details/:id', component: SoftwareDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'home-page', component: HomePageComponent,canActivate:[AuthGaurdService]},
  {path: 'contactus', component: ContactusComponent,canActivate:[AuthGaurdService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
