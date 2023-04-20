export class Model{
    name: string;
    price: number;
    model: string; 
    discount: number;

    constructor(name: string, price: number, model: string, discount: number){
        this.name = name;
        this.price = price;
        this.model = model;
        this.discount = discount;
    }
};