import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.username);
  const username = "hmi123";
  const password = "password";
  if(this.password==password&&this.username==username)
    alert("login successful");
  else
    alert("login failure");
  return;
  }
}


  
