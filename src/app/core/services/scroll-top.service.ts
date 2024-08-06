import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollTopService {

  scrollToTop() {
    window.scrollTo({ top: 0 });
  }

}
