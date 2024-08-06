import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { fromEvent, map } from 'rxjs';

import { TranslatePipe } from '../shared/pipes/translate.pipe';

import { TranslateService } from '../core/services/translate.service';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavHeaderComponent } from '../shared/components/nav-header/nav-header.component';
import { NavMovilComponent } from '../shared/components/nav-movil/nav-movil.component';
import { enviroment } from '../../enviroment/enviroment';
import { LocalStorageService } from '../core/services/localstorage.service';



@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavHeaderComponent,
    NavMovilComponent,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css',
})
export default class WebsiteComponent {

  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  
  public whatsapp:string = enviroment.whatsapp;

  hideMenu:boolean = false;

  constructor() {

    const calcularPorcentajeScroll = ( event:any ) => {
      const {scrollTop,scrollHeight,clientHeight} = event.target.documentElement;

      // console.log( 'scrollTop',scrollTop);
      // console.log( 'scrollHeight',scrollHeight);
      // console.log( 'clientHeight',clientHeight);

      return ( scrollTop / ( scrollHeight - clientHeight )*100 );
    }
    const scroll$ = fromEvent(document,'scroll');
    const opacityNavbar$ = scroll$.pipe(
      map(  calcularPorcentajeScroll ),
    )
    opacityNavbar$.subscribe(
      scroll => {
        if (scroll < 40 ) {
          this.hideMenu = false  
        }
        else {
          this.hideMenu = true  
        }
      }
    )
  }

}
