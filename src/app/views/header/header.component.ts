import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  url: string;

  constructor(private router: Router) {
    this.title = '';
    this.url = this.router.url;
  }

  ngOnInit(): void {
    if (!this.title) {
      this.title = 'Triple-X';
    }

  }

  home(): any {
    this.router.navigate(['']);
  }

  viajarOpciones(opcion: string): void {
    this.router.navigate([this.url + opcion]);
  }
}
