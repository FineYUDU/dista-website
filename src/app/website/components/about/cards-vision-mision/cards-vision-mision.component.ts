import { Component, inject, signal } from '@angular/core';

import { TranslateService } from '../../../../core/services/translate.service';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

export interface CardsVisionMision {
  title:string;
  description:string;
} 

@Component({
  selector: 'cards-vision-mision',
  standalone: true,
  imports: [
    TranslatePipe,
  ],
  templateUrl: './cards-vision-mision.component.html',
  styleUrl: './cards-vision-mision.component.css'
})
export class CardsVisionMisionComponent {
  public translateService = inject( TranslateService );

  cards = signal<CardsVisionMision[]>([
    {
      title:'about.vision.title',
      description:'about.vision.description',
    },
    {
      title:'about.mission.title',
      description:'about.mission.description',
    }
  ])

}
