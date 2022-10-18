import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from 'src/app/services/countries-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  posts : any;
  
  constructor(private httpService: CountriesServiceService, private router: Router) { }

  openInfo = (name: string) => {
    this.router.navigate([`/${name}`])
  }
  
  ngOnInit() {
    this.httpService.getPosts().subscribe(
    (response) => { this.posts = response},
    (error) => { console.log(error); });
  }
  
}
