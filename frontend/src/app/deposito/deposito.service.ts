import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  url = 'http://localhost:3000/depositos';

  constructor(private http : HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  getById(id: any) {
    return this.http.get(this.url + '/' + id);
  }

  update(id: any, deposito : any) {
    return this.http.put(this.url + '/' + id, deposito);
  }

  add(deposito : any) {
    return this.http.post(this.url, deposito);
  }

  del(deposito : any) {
    return this.http.delete(this.url + '/' + deposito.id, deposito);
  }
}
