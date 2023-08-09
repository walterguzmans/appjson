import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from '../models/provincia';

@Injectable({
  providedIn: 'root',
})
export class ProvinciasService {
  private vRoot = 'http://localhost:3000/provincias';

  constructor(private HttpClient: HttpClient) {}
  public getProvincias(): Observable<Provincia[]> {
    return this.HttpClient.get<Provincia[]>(this.vRoot);
  }

  public getProvinciasByID(Id: number): Observable<Provincia> {
    return this.HttpClient.get<Provincia>(`${this.vRoot}/${Id}`);
  }
}
