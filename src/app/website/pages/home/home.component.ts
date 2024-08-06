import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { ClientsComponent } from '../../components/home/clients/clients.component';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { ServicesContractComponent } from '../../components/home/services-contract/services-contract.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ClientsComponent,
    HeroComponent,
    NgOptimizedImage,
    RouterModule,
    ServicesContractComponent,
    TranslatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  public localStorageService = inject( LocalStorageService );
  public translateService = inject( TranslateService );
  

}
