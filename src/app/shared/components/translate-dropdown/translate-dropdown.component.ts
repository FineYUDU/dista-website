import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { TranslateService } from '../../../core/services/translate.service';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'translate-dropdown',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule,
  ],
  templateUrl: './translate-dropdown.component.html',
  styleUrl: './translate-dropdown.component.css'
})
export class TranslateDropdownComponent {
  public translateService = inject( TranslateService );
  public localStorageService = inject( LocalStorageService );
  public el = inject( ElementRef );
  

  isDropdownOpen:boolean = false;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) { !this.isClickInsideComponent(event) ? this.isDropdownOpen = false : undefined }

  isClickInsideComponent(event: MouseEvent): boolean {
    const mainContElement = this.el.nativeElement.querySelector('.container');
    return mainContElement.contains(event.target as Node);
  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
