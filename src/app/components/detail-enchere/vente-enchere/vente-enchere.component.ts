import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api';

@Component({
  selector: 'app-vente-enchere',
  templateUrl: './vente-enchere.component.html',
  styleUrls: ['./vente-enchere.component.css']
})
export class VenteEnchereComponent implements OnInit {

  produits = [];
  constructor(private api:ApiService,private router:Router, 
  public auth:AuthService ) { }

  ngOnInit(): void {
    this.api. getProduitEnchere().subscribe(data => {this.produits =data;
      console.log(data);
    },
    error =>console.log(error)
    );
    }
  
      deleteProduit(produit) {
        let indice = this.produits.indexOf(produit);
        this.produits.splice(indice, 1);
        let _id = produit.id;
        this.api.deleteProduitEnchere(_id).subscribe(
          result=>{console.log(result);       
          },
          error=>{
            return console.log(error);
          }
        )
      }
      onSelect(produit){
        this.router.navigate(['/detail-enchere',produit.id])
      
      }
     
    }
