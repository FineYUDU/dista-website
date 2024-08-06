import { Component, inject } from '@angular/core';

import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { CardsVisionMisionComponent } from '../../components/about/cards-vision-mision/cards-vision-mision.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CardsVisionMisionComponent,
    TranslatePipe,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService );

}
