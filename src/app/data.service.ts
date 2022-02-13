import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getRestaturants(postcode:string){
    console.log(postcode);
    return this.http.get('/restaurants/bypostcode/'+postcode)
  }
}
