import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public mode:number=0;
  panelStyle:string= "panel-default";
  constructor(public orderService:OrderService,
              private authService:AuthService,
              public caddyService:CartService,
              private router:Router) { }

  ngOnInit() {
  }

  onSaveClient(client:Client) {
    client.username=this.authService.userAuthen.username;
    this.orderService.setClient(client);
    this.caddyService.setClient(client);
    this.orderService.loadProductsFromCaddy();
    this.mode=1;
  }

}
