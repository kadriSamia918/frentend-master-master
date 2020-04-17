import { ItemProduct } from './item';
import { Client } from './client';


export class Order {
  public id:number;
  public client:Client={name:"",address:"",phoneNumber:"",email:"",username:""};
  public products:Array<ItemProduct>=[];
  public totalAmount:number;
  public date:Date;
}
