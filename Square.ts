import {IColorable} from "./colorable";

class Square implements IColorable {
    side:number
    constructor(side:number) {
        this.side=side;
    }
    getArea=()=>Math.pow(this.side,2);
    howtoColor=():string=>
        `Color all four side`
}
let square=[];
square[0]=new Square(40);
square[1]=new Square(30);
square[2]=new Square(80);

square.forEach((item,index) => {
    console.log(item.getArea());
    if(item instanceof Square){
        console.log(item.howtoColor());
    }
});


