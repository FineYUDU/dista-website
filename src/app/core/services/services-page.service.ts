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
      img:'image_edited',
    },
    {
      id:'service-2',
      title:'services.service-2.title',
      description:'services.service-2.description',
      router:'../service-2',
      promotion:'services.promo.new',
      img:'image_edited',
    },
    {
      id:'service-3',
      title:'services.service-3.title',
      description:'services.service-3.description',
      router:'../service-3',
      promotion:'services.promo.sale',
      img:'image_edited',
    },
    {
      id:'service-4',
      title:'services.service-4.title',
      description:'services.service-4.description',
      router:'../service-4',
      img:'image_edited',
    },
    {
      id:'service-5',
      title:'services.service-5.title',
      description:'services.service-5.description',
      router:'../service-5',
      img:'image_edited',
    },
    {
      id:'service-6',
      title:'services.service-6.title',
      description:'services.service-6.description',
      router:'../service-6',
      img:'image_edited',
    },
    {
      id:'service-7',
      title:'services.service-7.title',
      description:'services.service-7.description',
      router:'../service-7',
      img:'image_edited',
    },
    {
      id:'service-8',
      title:'services.service-8.title',
      description:'services.service-8.description',
      router:'../service-8',
      img:'image_edited',
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
