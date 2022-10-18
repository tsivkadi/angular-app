import { Component, OnInit } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  theme: boolean = true;
  faSun = faSun;
  faMoon = faMoon;

  changeTheme = () => {
    this.theme = !this.theme;
    const body = (document.getElementById('body') as HTMLBodyElement)
    this.theme ? body.className = 'body-light' : body.className = 'body-dark'
  }

  ngOnInit(): void {
  }

}
