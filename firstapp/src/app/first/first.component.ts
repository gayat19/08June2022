import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
name:string ;
clsName:string;
like:boolean;
testdata:string;
  constructor() { 
    this.name="Jim";
    this.clsName="glyphicon glyphicon-heart-empty";
    this.like = false;
    this. testdata = "Lets see how pipe will transform this data in to short";

  }

  ngOnInit(): void {
  }
  showName(un:any){
    this.name=un;
    alert(this.name);
  }
  toggleLike(){
    if(this.like==false){
      this.like = true;
    }
    else
     this.like=false;
    if(this.like){
      this.clsName= "glyphicon glyphicon-heart";
    }
    else
    this.clsName="glyphicon glyphicon-heart-empty";
  }

}
