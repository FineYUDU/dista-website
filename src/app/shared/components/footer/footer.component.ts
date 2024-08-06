import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocalStorageService } from '../../../core/services/localstorage.service';
import { ScrollTopService } from '../../../core/services/scroll-top.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../pipes/translate.pipe';
import { MenusService } from '../../../core/services/menus.service';
import { enviroment } from '../../../../enviroment/enviroment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public localStorageService = inject( LocalStorageService );
  public menusService = inject( MenusService );
  public translateService = inject( TranslateService );
  public scrollTopService = inject( ScrollTopService );
  
  footer:string = enviroment.footer;

}
