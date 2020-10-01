import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background: orangered; color: white;font-family: "Bradley Hand ITC"; font-size: 20px}',
    'li a { color:white}',
    'ul.nav a:hover { color: black  }'
  ]
})
export class HeaderComponent {
  constructor() {}

  }
