import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormControl, FormGroup, Validators } from '@angular/forms'
import { nameNotAllowedValidator } from './invalid-name.validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
myFrom:FormGroup;
  constructor(private route:Router) {
    this.username="";
    this.password = "";
    this.myFrom = new FormGroup({
      "un":new FormControl(null,[Validators.required,nameNotAllowedValidator,Validators.pattern("[A-Za-z][A-Za-z]*")]),
      "pass":new FormControl(null,Validators.required)
    });
   }
   
   public get un() : any {
     return this.myFrom.get("un");
   }
   public get pass() : any {
    return this.myFrom.get("pass");
  }
   
// login(un:any,pass:any){
//   console.log(un)
//     if(un.valid && pass.valid)
//     {
//       alert(this.username);
//       localStorage.setItem("un",this.username);
//       this.route.navigate(["flowers"])
//     }
  
// }
login(){
  console.log(this.un)
    // if(this.un.valid && this.pass.valid)
    if(this.myFrom.valid)
    {
      alert("Welcome   "+this.un.value);
      localStorage.setItem("un",this.un.value);
      this.route.navigate(["flowers"])
    }
    else{

    }
  
}
  ngOnInit(): void {
  }

}
