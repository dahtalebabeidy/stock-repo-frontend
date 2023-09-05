import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCategorieById(categorieId: number): Observable<any> {
    const url = `${this.apiUrl}/${categorieId}`;
    return this.http.get<any>(url);
  }

  addCategorie(categorie: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, categorie);
  }

  updateCategorie(categorie: any): Observable<any> {
    const url = `${this.apiUrl}/${categorie.id}`;
    return this.http.put<any>(url, categorie);
  }

  deleteCategorie(categorieId: number): Observable<any> {
    const url = `${this.apiUrl}/${categorieId}`;
    return this.http.delete<any>(url);
  }
}
