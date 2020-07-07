import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  url = 'http://localhost:3000/areas';

  constructor(private http : HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  getById(id: any) {
    return this.http.get(this.url + '/' + id);
  }

  update(id: any, area : any) {
    return this.http.put(this.url + '/' + id, area);
  }

  add(area : any) {
    return this.http.post(this.url, area);
  }

  del(area : any) {
    return this.http.delete(this.url + '/' + area.id, area);
  }
}
