import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../../core/services/translate.service';
import { ScrollTopService } from '../../../../core/services/scroll-top.service';

export interface Activities {
  txt:string;
}

@Component({
  selector: 'services-contract',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './services-contract.component.html',
  styleUrl: './services-contract.component.css'
})
export class ServicesContractComponent {
  public translateService = inject( TranslateService );
  public scrollTopService = inject( ScrollTopService );

  public activities = signal<Activities[]>([
    {
      txt:'services.activities.li1'
    },
    {
      txt:'services.activities.li2'
    },
    {
      txt:'services.activities.li3'
    },
    {
      txt:'services.activities.li4'
    },
    {
      txt:'services.activities.li5'
    },
    {
      txt:'services.activities.li6'
    },
    {
      txt:'services.activities.li7'
    },
  ])

}
