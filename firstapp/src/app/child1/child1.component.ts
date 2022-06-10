import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges  {
username:string;
  constructor(private activatedRoute:ActivatedRoute) {
    //this.username = this.activatedRoute.snapshot.params["un"];
    this.username = "";
    this.activatedRoute.params.subscribe(data=>{
        this.username = data['un'];
    })
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Change")
    this.username = this.activatedRoute.snapshot.params["un"];
  }
  // ngDoCheck(){
  //   console.log("On Do Check")
  //   this.username = this.activatedRoute.snapshot.params["un"];
  // }
  ngOnInit(): void {
    console.log("On Init")
    this.username = this.activatedRoute.snapshot.params["un"];
  }

}
