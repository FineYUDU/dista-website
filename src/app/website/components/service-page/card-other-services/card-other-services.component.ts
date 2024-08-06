import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { ServicesPageService } from '../../../../core/services/services-page.service';
import { TranslateService } from '../../../../core/services/translate.service';

import { Services } from '../../../../core/interfaces/service.page.interfaces';



@Component({
  selector: 'card-other-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './card-other-services.component.html',
  styleUrl: './card-other-services.component.css'
})
export class CardOtherServicesComponent implements OnInit {
  private activatedRoute = inject( ActivatedRoute );
  private router = inject( Router );
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public servicesPageService = inject( ServicesPageService );

  
  services?:Services[];

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.servicesPageService.getOtherServices(id) ),

      ).subscribe( (service:Services[] | undefined) => {

        if (!service ) return this.router.navigate(['/home']);
        this.services = service;

        // console.log({service});
        return;
    })
  }

}
