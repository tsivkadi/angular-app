import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  data: any;
  res: any;
  currency = {};
  languages = {};
  borders = [];
  name: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country = params['country']
   });
   let url: string = `https://restcountries.com/v3.1/name/${this.country}`;
   this.http.get(url).subscribe(
    (response) => { 
      //console.log(response);
      this.data = response;
      this.res = this.data[0]
      this.currency = this.res.currencies
      this.languages = this.res.languages
      this.borders = this.res.borders
      this.name = Object.values(this.res.name.nativeName)[0];
    },
    (error) => { console.log(error); });


}
}
