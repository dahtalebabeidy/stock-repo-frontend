import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtagereService {

  private apiUrl = 'http://localhost:8080/api/etageres';

  constructor(private http: HttpClient) { }

  getAllEtagere(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEtagereById(etagereId: number): Observable<any> {
    const url = `${this.apiUrl}/${etagereId}`;
    return this.http.get<any>(url);
  }

  addEtagere(etagere: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, etagere);
  }

  updateEtagere(etagere: any): Observable<any> {
    const url = `${this.apiUrl}/${etagere.id}`;
    return this.http.put<any>(url, etagere);
  }

  deleteEtagere(etagereId: number): Observable<any> {
    const url = `${this.apiUrl}/${etagereId}`;
    return this.http.delete<any>(url);
  }
}
