import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flower';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
//flower:Flower;
flowers:Flower[];
countLikes:number;
  constructor(private flowerService:FlowerService) { 
    //this.flower = new Flower(101,"Lilly",12.5,10,"assets/images/Pic1.jpg")
    this.flowers = this.flowerService.getFlowers();
    this.countLikes=0;
  }

  ngOnInit(): void {
  }
  buy(id:any){
    let myFlower = this.flowerService.getFlower(id);
    if(myFlower){
      myFlower.quantity = 1;
      this.flowerService.addToCart(myFlower);
    }
   
  }
  countNow(){
    this.countLikes=0;
    this.flowers.forEach(element => {
      if(element.like)
        this.countLikes++;
    });
  }

}
