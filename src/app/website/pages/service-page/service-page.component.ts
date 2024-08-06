import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { fromEvent, switchMap } from 'rxjs';

import { LocalStorageService } from '../../../core/services/localstorage.service';
import { ServicesPageService } from '../../../core/services/services-page.service';
import { TranslateService } from '../../../core/services/translate.service';

import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

import { Services } from '../../../core/interfaces/service.page.interfaces';

import { CardOtherServicesComponent } from '../../components/service-page/card-other-services/card-other-services.component';
import { ScrollTopService } from '../../../core/services/scroll-top.service';
import { enviroment } from '../../../../enviroment/enviroment';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [
    CardOtherServicesComponent,
    CommonModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export default class ServicePageComponent implements OnInit {
  private activatedRoute = inject( ActivatedRoute );
  private router = inject( Router );
  private servicesPageService = inject( ServicesPageService );
  public localStorageService = inject( LocalStorageService );
  public scrollTopService = inject( ScrollTopService );
  public translateService = inject( TranslateService );

  public whatsapp:string = enviroment.whatsapp;

  service?:Services;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.servicesPageService.getServiceByID(id) ),

      ).subscribe( (service:Services | undefined) => {

        if (!service ) return this.router.navigate(['/home']);
        this.service = service;

        // console.log({service});
        return;
    })
  }

}
