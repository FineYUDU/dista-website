import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';

import { fromEvent, map } from 'rxjs';

import { enviroment } from '../../../../enviroment/enviroment';

import { LocalStorageService } from '../../../core/services/localstorage.service';
import { MenusService } from '../../../core/services/menus.service';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../pipes/translate.pipe';

import { NavMovilComponent } from '../nav-movil/nav-movil.component';
import { TranslateDropdownComponent } from '../translate-dropdown/translate-dropdown.component';

@Component({
  selector: 'nav-header',
  standalone: true,
  imports: [
    CommonModule,
    NavMovilComponent,
    NgOptimizedImage,
    RouterModule,
    TranslateDropdownComponent,
    TranslatePipe,
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  public localStorageService = inject( LocalStorageService );
  public menusService = inject( MenusService );
  public themeService = inject( ThemeService );
  public translateService = inject( TranslateService );

  companyName:string = enviroment.companyName;
  hideMenu:boolean = false;

  constructor() {

    const calcularPorcentajeScroll = ( event:any ) => {
      const { scrollTop } = event.target.documentElement;

      // console.log( 'scrollTop navbarComponent',scrollTop);

      return scrollTop;
    }
    const scroll$ = fromEvent(document,'scroll');
    const hideNavbar$ = scroll$.pipe(
      map(  calcularPorcentajeScroll ),
    )
    hideNavbar$.subscribe(
      scroll => {
        if (scroll < 200 ) {
          this.hideMenu = false  
        }
        else {
          this.hideMenu = true  
        }
      }
    )
  }

}
