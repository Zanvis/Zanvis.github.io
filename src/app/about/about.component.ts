import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('staggerSlideIn', [
      transition(':enter', [
        query('.stagger-item', [
          style({ opacity: 0, transform: 'translateY(20px) scale(0.95)' }),
          stagger(200, [
            animate('1s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0) scale(1)' })),
          ]),
        ]),
        query('.typing-effect', [
          style({ width: '0ch' }),
          animate('2s steps(20)', style({ width: '8.5ch' })),
        ]),
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
export class AboutComponent {
  showEducation = false;
  education = [
    { 
      degree: 'Engineer of Computer Science', 
      school: 'Akademia Finansów i Biznesu Vistula', 
      year: '2022 - present' 
    },
    {
      degree: 'High School Diploma',
      school: 'XLIX Liceum Ogólnokształcące z Oddziałami Dwujęzycznymi im. Johanna Wolfganga Goethego',
      year: '2019 - 2022'
    }
  ];
  toggleEducation() {
    this.showEducation = !this.showEducation;
  }
}
