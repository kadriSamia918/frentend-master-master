import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Iproduit } from './models/produit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
    private UserUrl : string ="http://localhost:8080/user";
    private _updateProduit : string ="http://localhost:8080/products";
    private _url : string = "http://localhost:8080/products";
    private _url2 : string = "http://localhost:8080/products";
    private getEnchere: string = 'http://localhost:8080/auction';
    private postUrl : string = "http://localhost:8080/products";
    private postEnchere: string = 'http://localhost:8080/auction';
    public host:string="https://localhost:8080";
    
   
  constructor( private http: HttpClient) {

  }
  // list  users // tache admin
 
  getAllUser() {
    let user = this.http.get<any>(this.UserUrl);
    return user;
  }
  ajouterUser(user){
    return this.http.post<any>(this.UserUrl,user);

  }
   
  updateUserState(userId) {
    return this.http.put<any>(this.UserUrl,userId)
    
  }
  
 deleteUser(userId){
    return this.http.delete<any>(this.UserUrl+"/"+userId)

  }
  //tache
  updateProduit(produit:Iproduit,id) {
    return this.http.put<any>(this._updateProduit+'/'+id, produit);
  }
  getProduit(){
    return this.http.get<any>(this._url);
    
  }
 getProduitById(produitId){
    return this.http.get<any>(this._url2+"/"+produitId);
  } 
  getProduitEnchere(){
    return this.http.get<any>(this.getEnchere);

    
  }
  getProduitByIdEnchere(produitId){
    return this.http.get<any>(this.getEnchere+"/"+produitId);
  }
  registerProduit(produit) {
    console.log(produit)
    return this.http.post<any>(this.postUrl,produit); 
  }
  deleteProduit(produitId){
    return this.http.delete<any>(this._url+"/"+produitId);
  }
  registerProduitEnchere(produit) {
    console.log(produit)
    return this.http.post<any>(this.postEnchere,produit); 
  }

    deleteProduitEnchere(produitId){
      return this.http.delete<any>(this.postEnchere+"/"+produitId);
    }
    uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>> {
      let formdata: FormData = new FormData();
      formdata.append('file', file);
      const req = new HttpRequest('POST', this.host+'/image/'+idProduct, formdata, {
        reportProgress: true,
        responseType: 'text'
      });
  
      return this.http.request(req);
    }
    

  }
 