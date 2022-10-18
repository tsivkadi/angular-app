import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backbtn',
  templateUrl: './backbtn.component.html',
  styleUrls: ['./backbtn.component.scss']
})
export class BackbtnComponent implements OnInit {

  constructor(private router: Router) { }

  backFunc = () => {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {

  }

}
