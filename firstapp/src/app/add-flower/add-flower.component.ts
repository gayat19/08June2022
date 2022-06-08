import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Flower } from '../models/flower';
import { FlowerService } from '../services/flower.service';

@Component({
  selector: 'app-add-flower',
  templateUrl: './add-flower.component.html',
  styleUrls: ['./add-flower.component.css']
})
export class AddFlowerComponent implements OnInit {
flower:Flower;
  constructor(private flowerService:FlowerService,private router:Router) {
    this.flower = new Flower()
   }
   addFlower(){
     this.flowerService.addFlower(this.flower);
     alert('flower addedd!!')
     this.router.navigate(["flowers"]);
   }
  ngOnInit(): void {
  }

}
