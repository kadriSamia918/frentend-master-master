import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Boolean;
  

  constructor(private router:Router,public auth:AuthService,public caddySer:CartService) { }

  ngOnInit(): void {
   
  }


  onLogout(){
    this.auth.logout();
    this.router.navigateByUrl('/login')

  }

}
