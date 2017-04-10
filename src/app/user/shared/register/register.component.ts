import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:String;
  password:String;

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.post('/api/user/add',{
      username: this.username,
      password: this.password
    })
  }

}
