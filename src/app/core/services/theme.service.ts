import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  changeMode(theme:string): void {
    theme = localStorage.getItem('theme') || 'light';
    theme = theme === 'light' ? 'light' : 'dark';

    document.body.classList.toggle('theme--dark', theme === 'dark');
    document.body.classList.toggle('theme--light',theme === 'light');

    localStorage.setItem('theme', theme);
  }
  
}
