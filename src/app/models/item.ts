import { Iproduit } from './produit';
 // put attributes instead of constructure
export class ItemProduct{
    id:number;
    name:string;
    price:number;
    quantity:number;
    product:Iproduit;
  }