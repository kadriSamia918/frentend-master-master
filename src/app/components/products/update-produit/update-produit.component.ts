import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Iproduit } from 'src/app/models/produit';
import { ApiService } from 'src/app/api';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  updateProductForm: FormGroup;
public prodId
public produit
  
  constructor(private fb: FormBuilder,private route:ActivatedRoute,
    private  router: Router,private api:ApiService) { 
  
   
    

  let formControls = {
    title: new FormControl('', [
      Validators.required,
     
      
    ]),
    price: new FormControl('', [
      Validators.required,
 

    ]),
    description: new FormControl('', [
      Validators.required,

    ]),
  

  }

  this.updateProductForm= fb.group(formControls);
}

get title() { return this.updateProductForm.get('title'); }
get price() { return this.updateProductForm.get('price'); }
get description() { return this.updateProductForm.get('description'); }


ngOnInit(): void {
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
  this.prodId=id;
this.api.getProduitById(this.prodId).subscribe(
  data => {
    this.produit= data ;
    console.log(data);
},
  error => console.log(error) 

);
}
  
  updateProduit(){
  
      let data = this.updateProductForm.value;
      console.log(data);
      let produit = new Iproduit();
      produit.name=data.title;
      produit.price=data.price;
      produit.description=data.description;
      console.log(produit);
  
      this.api.updateProduit(produit,this.prodId).subscribe(
        result => {
          this.router.navigate(['/'])
        },
        error => {





          
          console.log(error);
        }
      );
  
    }

  }

