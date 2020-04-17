import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Iproduit } from 'src/app/models/produit';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/api';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
produits = [];

constructor( private api : ApiService,public auth:AuthService,
   private router:Router,private caddySer:CartService) {


    }
   
ngOnInit(): void {

  this.api.getProduit().subscribe(data => {this.produits =data;
  console.log(data);

},
error =>console.log(error)
);
}
onSelect(produit){
  this.router.navigate(['/produitdetails',produit.id])

}
onSelectUpdate(produit){
  this.router.navigate(['/updateProduit',produit.id])

}

deleteProduit(produit) {
  let indice = this.produits.indexOf(produit);
  this.produits.splice(indice, 1);
  let _id = produit.id;
  this.api.deleteProduit(_id).subscribe(
    result=>{console.log(result);
      
    },
    error=>{
      return console.log(error);
    }
  )
}
onAddProductToCaddy(p:Iproduit) {
  if(!this.auth.isAuthenticated()){
    this.router.navigateByUrl("/login");
  }
  else{
    this.caddySer.addProduct(p);
  }
}
}



/*
updateState(_id){
  this._adminService.updateStudentState({studentId:_id}).subscribe(

    result=>{console.log(result);
      this.ngOnInit();
    },
    error=>console.log(error)
    
  )
}*/

