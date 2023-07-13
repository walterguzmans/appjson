import {HttpClient} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  private vRoot = 'http://localhost:3000/usuarios'
  
  constructor(private http: HttpClient) {}
  
  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.vRoot)
  }

  public getUsuario(pId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.vRoot}/${pId}`)
  }  

  public postUsuario(pUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.vRoot}`, pUsuario);    
  }

  public putUsuario(pUsuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.vRoot}/${pUsuario.id}`, pUsuario);
    }

  public deleteUsuario(pId: number): Observable<any> {
      return this.http.delete(`${this.vRoot}/${pId}`)
    }      
}
