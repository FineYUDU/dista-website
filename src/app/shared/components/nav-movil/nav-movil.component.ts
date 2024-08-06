import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocalStorageService } from '../../../core/services/localstorage.service';
import { MenusService } from '../../../core/services/menus.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../pipes/translate.pipe';

import { enviroment } from '../../../../enviroment/enviroment';

@Component({
  selector: 'nav-movil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslatePipe,
    NgOptimizedImage,
  ],
  templateUrl: './nav-movil.component.html',
  styleUrl: './nav-movil.component.css'
})
export class NavMovilComponent {
  public localStorageService = inject( LocalStorageService );
  public menusService = inject( MenusService );
  public translateService = inject( TranslateService );


  footer:string = enviroment.footer;
  isOpenDropdown:boolean = false;

  collapseDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
  }

}
