import { Component, inject, signal } from '@angular/core';

import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { CommonModule } from '@angular/common';

export interface Clients {
  url:string;
}

@Component({
  selector: 'clients',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  public localStorageService = inject (LocalStorageService);

  public clients = signal<Clients[]>([
    {
      url:'uanl'
    },
    {
      url:'torre-411'
    },
    {
      url:'impulsora'
    },
    {
      url:'rivero'
    },
    {
      url:'elmol'
    },
    {
      url:'catehua'
    },
    {
      url:'yinlu'
    },
    {
      url:'rise-capital'
    },
    {
      url:'gred'
    },
    {
      url:'consorcio'
    },
    
  ])

}
