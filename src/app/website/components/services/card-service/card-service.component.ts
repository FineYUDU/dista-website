import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { ScrollTopService } from '../../../../core/services/scroll-top.service';
import { ServicesPageService } from '../../../../core/services/services-page.service';
import { TranslateService } from '../../../../core/services/translate.service';

@Component({
  selector: 'card-service',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe,
    RouterModule,
  ],
  templateUrl: './card-service.component.html',
  styleUrl: './card-service.component.css'
})
export class CardServiceComponent {
  public localStorageService = inject( LocalStorageService );
  public servicesPageService = inject( ServicesPageService );
  public translateService = inject( TranslateService );
  public scrollTopService = inject( ScrollTopService );

}
