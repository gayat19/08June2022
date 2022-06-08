import { Component, Input, OnInit } from '@angular/core';
import { Flower } from '../models/flower';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input() flower:Flower;
  constructor() {
    this.flower = new Flower();
   }

  ngOnInit(): void {
  }

}
