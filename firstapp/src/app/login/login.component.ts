import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
  constructor(private route:Router) {
    this.username="";
    this.password = "";
   }
login(){
  alert(this.username);
  localStorage.setItem("un",this.username);
  this.route.navigate(["flowers"])
}
  ngOnInit(): void {
  }

}
