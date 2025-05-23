import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('imageAnimation', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('1s ease-out'))
    ]),
    trigger('staggerSlideIn', [
      transition(':enter', [
        query('.stagger-item', [
          style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }),
          stagger(200, [
            animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
          ]),
        ], { optional: true }),
        query('.typing-effect', [
          style({ width: '0ch' }),
          animate('2s steps(20)', style({ width: '8.5ch' })),
        ], { optional: true }),
      ]),
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('preloadImage') preloadImage: ElementRef | undefined;
  
  showEducation = false;
  imageLoaded = false;
  imageState = 'hidden';
  
  constructor(private translate: TranslateService) {}

  education = [
    { 
      degree: this.translate.instant('ABOUT.DEGREES.COMPUTER_SCIENCE'), 
      school: this.translate.instant('ABOUT.SCHOOLS.VISTULA'), 
      year: this.translate.instant('ABOUT.YEARS.VISTULA') 
    },
    {
      degree: this.translate.instant('ABOUT.DEGREES.HIGH_SCHOOL'),
      school: this.translate.instant('ABOUT.SCHOOLS.GOETHE'),
      year: this.translate.instant('ABOUT.YEARS.GOETHE')
    }
  ];
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.imageLoaded = true;
      
      setTimeout(() => {
        this.imageState = 'visible';
      }, 50);
    }, 100);
  }
  
  toggleEducation() {
    this.showEducation = !this.showEducation;
  }
  
  onImageLoad() {
    if (!this.imageLoaded) {
      this.imageLoaded = true;
      setTimeout(() => {
        this.imageState = 'visible';
      }, 50);
    }
  }
}