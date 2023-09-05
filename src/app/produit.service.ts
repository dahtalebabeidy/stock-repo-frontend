import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private apiUrl = 'http://localhost:8080/api/produits';
  private etageresUrl = 'http://localhost:8080/api/etageres';
  private categoriesUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  getAllProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProduitById(produitId: number): Observable<any> {
    const url = `${this.apiUrl}/${produitId}`;
    return this.http.get<any>(url);
  }

  addProduit(produit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produit);
  }

  updateProduit(produit: any): Observable<any> {
    const url = `${this.apiUrl}/${produit.id}`;
    return this.http.put<any>(url, produit);
  }

  deleteProduit(produitId: number): Observable<any> {
    const url = `${this.apiUrl}/${produitId}`;
    return this.http.delete<any>(url);
  }

  getAllEtagere(): Observable<any[]> {
    return this.http.get<any[]>(this.etageresUrl);
  }

  getAllCategorie(): Observable<any[]> {
    return this.http.get<any[]>(this.categoriesUrl);
  }
}
