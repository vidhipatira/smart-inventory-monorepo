import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = 'http://localhost:5136/api/Inventory';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  deleteItem(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateItem(id: number, item: any) {
  return this.http.put(`${this.apiUrl}/${id}`, item);
  }


}
