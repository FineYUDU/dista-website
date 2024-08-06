import { Component, inject } from '@angular/core';

import { TranslateService } from '../../../../core/services/translate.service';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService );

}
