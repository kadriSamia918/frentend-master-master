import { ItemProduct } from './item';
import { Client } from './client';

export class Caddy{
public name:string;
  public items:Map<string,ItemProduct>=new Map();
  public client:Client;

  constructor(name:string){this.name=name;}
  
}