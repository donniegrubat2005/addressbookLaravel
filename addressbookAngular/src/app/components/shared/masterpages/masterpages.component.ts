import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masterpages',
  templateUrl: './masterpages.component.html',
  styleUrls: ['./masterpages.component.css'],
})
export class MasterpagesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
