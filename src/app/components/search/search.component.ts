import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch= faSearch;
  value = ''

  constructor(private router: Router) { }

  search = () => {
    let country = ((document.getElementById("search") as HTMLInputElement).value);
    this.router.navigate([`/${country}`]);
  }

  ngOnInit(): void {

  }

}
