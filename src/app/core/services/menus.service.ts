import { Injectable, signal } from '@angular/core';

import { NavMenu } from '../interfaces/menu.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menuNavigation = signal<NavMenu[]>([
    {
      txt:'menu.home',
      router:'home'
    },
    {
      txt:'menu.about',
      router:'about'
    },
    {
      txt:'menu.services',
      router:'services'
    },
    {
      txt:'menu.contact',
      router:'contact'
    },
  ])

  contactMenu = signal<NavMenu[]>([
    {
      txt:'contacto@distaclean.com'
    },
    {
      txt:'+52 8124200186'
    },
  ])
}
