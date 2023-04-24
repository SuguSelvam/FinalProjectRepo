import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = '';
  password = '';
  invalidLogin = false

  errorname = '';
  errorpassword = '';

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {

    if(this.loginservice.authenticateusername(this.username,this.password)){
        this.invalidLogin=true;
        this.errorname ='Username is required';
    }
    else if(this.loginservice.authenticatepassword(this.username,this.password)){
         this.invalidLogin=true;
         this.errorpassword='Passsword must be at least 6 characters';
    }
    
    else if (this.loginservice.authenticate(this.username, this.password)
    ) {
        this.router.navigate(['softwares']);
        console.log("navigate..");
        this.invalidLogin = false;
      }

    else if (this.loginservice.authenticateboth(this.username, this.password)){
         this.invalidLogin=true;
         this.errorname = "Username is required";
         this.errorpassword='Passsword must be at least 6 characters';
    }

}

  signup(){
     this.router.navigate(['signup']);
    
  }

}

