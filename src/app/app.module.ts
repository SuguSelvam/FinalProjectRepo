import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftwareListComponent } from './software-list/software-list.component';

import { FormsModule} from '@angular/forms';
import { CreateSoftwareComponent } from './create-software/create-software.component';
import { UpdateSoftwareComponent } from './update-software/update-software.component';
import { SoftwareDetailsComponent } from './software-details/software-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    SoftwareListComponent,
    CreateSoftwareComponent,
    UpdateSoftwareComponent,
    SoftwareDetailsComponent,
    LoginComponent,
    LogoutComponent,
    HomePageComponent,
    SignupComponent,
    ContactusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
