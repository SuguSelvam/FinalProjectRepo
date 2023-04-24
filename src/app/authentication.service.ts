import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
      constructor() { }

  authenticateusername(username : any, password : any)  {
    if (username !== "name" && password === "password") {
      return true;
    } else {
      return false;
    }
  }

  authenticatepassword(username : any, password : any)  {
    if (username === "name" && password !== "password") {
      return true;
    } else {
      return false;
    }
  }

  authenticate(username : any, password : any)  {
    if (username === "name" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  authenticateboth(username : any, password : any)  {
    if (username !== "name" && password !== "password") {
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
