import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { produitEnchere } from 'src/app/models/ProduitEnchere';
import { ApiService } from 'src/app/api';

@Component({
  selector: 'app-ajout-enchere',
  templateUrl: './ajout-enchere.component.html',
  styleUrls: ['./ajout-enchere.component.css']
})
export class AjoutEnchereComponent implements OnInit {

  addProduitForm: FormGroup;

  constructor(private fb: FormBuilder,private http:HttpClient,
     private router: Router, private _vendeurSer:ApiService) {

    let formControls = {
      name: new FormControl('', [
        Validators.required,
      
        
      ]),
      startingPrice: new FormControl('', [
        Validators.required,
   

      ]),
      startingDate: new FormControl('', [
        Validators.required,

      ]),
      endingDate: new FormControl('', [
        Validators.required,

      ]),
      // don't put createdAt spring adds creation data automatically. (this is backend job)

    }

    this.addProduitForm= fb.group(formControls);
  }
  ngOnInit(): void {
   
  }

  get name() { return this.addProduitForm.get('name'); }
  get startingPrice() { return this.addProduitForm.get('startingPrice'); }
  get startingDate() { return this.addProduitForm.get('startingDate'); }
  get endingDate() { return this.addProduitForm.get('startingDate'); }
 
  venteEnchere(){
    console.log(this.addProduitForm.value);
    let produit = new produitEnchere();
    produit.name = this.addProduitForm.value.name;
    produit.startingPrice = this.addProduitForm.value.startingPrice;
    produit.startingDate = this.addProduitForm.value.startingDate;
    produit.endingDate = this.addProduitForm.value.endingDate;

    
    this._vendeurSer.registerProduitEnchere(produit).subscribe(
      result => {
        
        this.router.navigate(['/enchere']);
      }
      ,
      error => console.log(error)
    )

  }

}

