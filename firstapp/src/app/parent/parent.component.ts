import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name:string;
  constructor(private router:Router) {
    this.name = "";
   }

  ngOnInit(): void {
  }
  change(){
    this.router.navigate(["parent/c1",this.name])
  }
}
