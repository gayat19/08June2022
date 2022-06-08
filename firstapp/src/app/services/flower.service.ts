
import { Flower } from "../models/flower";

export class FlowerService{
    flowers:Flower[];
    cart:Flower[];

    constructor() {
        this.flowers = [
            new Flower(101,"Lilly",12.5,10,"assets/images/Pic1.jpg",false),
            new Flower(102,"Rose",25.75,30,"assets/images/Pic2.jpg",false)
        ]
        this.cart = [];
    }
    addFlower(flower:Flower){
        this.flowers.push(flower);
    }
    getFlowers(){
        return this.flowers;
    }
    addToCart(flower:Flower){
        this.cart.push(flower);
    }
    getFlower(id:number){
        for (let index = 0; index < this.flowers.length; index++) {
          if(this.flowers[index].id== id)
             return this.flowers[index];
        }
        return null;
    }
}