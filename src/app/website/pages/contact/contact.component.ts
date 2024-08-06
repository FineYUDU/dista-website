import { Component, inject, signal } from '@angular/core';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { TranslateService } from '../../../core/services/translate.service';
import { CommonModule } from '@angular/common';

export interface Contact {
  title:string;
  txt:string;
  txt2?:string;
}


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent {
  public translateService = inject( TranslateService );

  contactMenu = signal<Contact[]>([
    {
      title:'contact.email',
      txt:'elideth.p@distadelnorte.com',
      txt2:'administracion@distadelnorte.com'
    },
    {
      title:'contact.location',
      txt:'Pino Suarez 513 Ampl. Lazaro Cardenas, Gral. Escobedo, N.L.'
    },
    {
      title:'contact.number',
      txt:'8126117529',
      txt2:'8124200186'
    },
  ])

}
