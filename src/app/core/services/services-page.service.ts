import { Injectable, signal } from '@angular/core';
import { Services } from '../interfaces/service.page.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService {

  services = signal<Services[]>([
    {
      id:'service-1',
      title:'services.service-1.title',
      description:'services.service-1.description',
      router:'../service-1',
      promotion:'services.promo.best-seller',
      carrousel:[
        'office-01',
        'office-02',
        'office-03',
      ],
      icon:'office',
    },
    {
      id:'service-2',
      title:'services.service-2.title',
      description:'services.service-2.description',
      router:'../service-2',
      promotion:'services.promo.new',
      carrousel:[
        'dining-room-01',
        'dining-room-02',
        'dining-room-03',
      ],
      icon:'dining-room',
    },
    {
      id:'service-3',
      title:'services.service-3.title',
      description:'services.service-3.description',
      router:'../service-3',
      promotion:'services.promo.sale',
      carrousel:[
        'height-01',
        'height-02',
        'height-03',
      ],
      icon:'heights',
    },
    {
      id:'service-4',
      title:'services.service-4.title',
      description:'services.service-4.description',
      router:'../service-4',
      carrousel:[
        'room-01',
        'room-02',
        'room-03',
      ],
      icon:'room',
    },
    {
      id:'service-5',
      title:'services.service-5.title',
      description:'services.service-5.description',
      router:'../service-5',
      carrousel:[
        'carpet-01',
        'carpet-02',
        'carpet-03',
      ],
      icon:'carpet',
    },
    {
      id:'service-6',
      title:'services.service-6.title',
      description:'services.service-6.description',
      router:'../service-6',
      carrousel:[
        'garden-01',
        'garden-02',
        'garden-03',
      ],
      icon:'garden',
    },
    {
      id:'service-7',
      title:'services.service-7.title',
      description:'services.service-7.description',
      router:'../service-7',
      carrousel:[
        'sanitations-01',
        'sanitations-02',
        'sanitations-03',
      ],
      icon:'saniziter',
    },
    {
      id:'service-8',
      title:'services.service-8.title',
      description:'services.service-8.description',
      router:'../service-8',
      carrousel:[
        'products-01',
        'products-02',
        'products-03',
      ],
      icon:'products',
    },
  ])

  getServiceByID(id: string):Observable<Services | undefined> {
    const service = this.services().find( service => service.id === id );
    return of(service);
  }

  getOtherServices(excludeId: string | undefined): Observable<Services[]> {
    const otherServices = this.services().filter(service => service.id !== excludeId);
    return of(otherServices);
  }

}
