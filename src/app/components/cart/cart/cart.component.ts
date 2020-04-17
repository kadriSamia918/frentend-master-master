import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Caddy } from 'src/app/models/caddy';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ItemProduct } from 'src/app/models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public caddy:Caddy;

  constructor( private router:Router,
              public caddySer:CartService, private auth:AuthService) { }
  
  ngOnInit() {
    if(!this.auth.isAuthenticated())
      this.router.navigateByUrl('/login');
    this.caddy=this.caddySer.getCaddy();
    console.log(this.caddy);
  }



  onRemoveProductFromCaddy(p: ItemProduct) {
    this.caddySer.removeProduct(p.id);
  }

  getTotal() {
      return this.caddySer.getTotalCurrentCaddy();
  }

  onNewOrder() {
    this.router.navigateByUrl("/client");
  }

  onAddCaddy() {

    let size=this.caddySer.listCaddies.length;
    let index:number=this.caddySer.listCaddies[size-1].num;
    this.caddySer.addNewCaddy({num:index+1,name:"Caddy"+(index+1)});
  }

  onSelectCaddy(c: { num: number; name: string }) {
    this.caddySer.currentCaddyName=c.name;
    this.caddy=this.caddySer.getCaddy();
  }
}