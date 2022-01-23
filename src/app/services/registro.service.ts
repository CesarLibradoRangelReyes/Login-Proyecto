import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
url = 'http://localhost:3000/api/registro/'
  constructor(private http: HttpClient) { }

  getRegistro(): Observable <any> {
  return this.http.get(this.url);
  }

  signIn (usuario: Registro): Observable<any> {
    return this.http.post(this.url + 'signin', usuario);
  }
}
