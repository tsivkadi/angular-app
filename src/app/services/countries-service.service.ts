import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
  private url = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }
  
  getPosts() {
    return this.http.get(this.url);
  }
}
