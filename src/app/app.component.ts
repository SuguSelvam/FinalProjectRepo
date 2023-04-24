import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Software Management System';
  constructor(public loginService:AuthenticationService) { }

  confirmngOnInit(){
    var status= confirm("Are you sure want to logout this page?");
     if (status==true) {
       this.ngOnInit();
      }
    
  }

  ngOnInit() {
    
  }
}