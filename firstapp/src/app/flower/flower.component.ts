import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Flower } from '../models/flower';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input() flower:Flower;
  @Output() countFlowerLike = new EventEmitter();
  constructor(private route:Router) {
    this.flower = new Flower();
   }
toggle(){
  if(this.flower.like)
    this.flower.like = false;
    else
      this.flower.like = true;
  this.countFlowerLike.emit();
}
  ngOnInit(): void {
  }
  showBig(){
    this.route.navigate(["pic",this.flower.id])
  }
}
