import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flower } from '../models/flower';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-show-pic',
  templateUrl: './show-pic.component.html',
  styleUrls: ['./show-pic.component.css']
})
export class ShowPicComponent implements OnInit {
  flower:any;
  id:number;
  constructor(private flowerService:FlowerService,
              private activeRoute:ActivatedRoute) {
    // this.flower=new Flower();
    // this.id = 0;
    this.id = this.activeRoute.snapshot.params["fid"] as number
    console.log(this.id)
    this.flower = this.flowerService.getFlower(this.id);
    console.log(this.flower)
   }

  ngOnInit(): void {
  }

}
