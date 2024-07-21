import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('fadeInUp', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition(':enter', [
        animate('0.6s ease-out')
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1s ease-out')
      ])
    ]),
    trigger('mapFadeIn', [
      state('hidden', style({
        opacity: 0,
        display: 'none'
      })),
      state('visible', style({
        opacity: 1,
        display: 'block'
      })),
      transition('hidden <=> visible', [
        animate('0.3s ease')
      ])
    ])
  ]
})
export class ContactComponent implements AfterViewInit{
  iframeLoaded = false;
  
  constructor(private renderer: Renderer2) {}
  // ngAfterViewInit() {
  //   const iframe = this.renderer.selectRootElement('#map-iframe', true);
  //   const skeleton = this.renderer.selectRootElement('#map-skeleton', true);

  //   this.renderer.listen(iframe, 'load', () => {
  //     this.renderer.setStyle(skeleton, 'display', 'none');
  //     this.renderer.setStyle(iframe, 'display', 'block');
  //   });
  // }
  ngAfterViewInit() {
    const iframe = this.renderer.selectRootElement('#map-iframe', true);
    const skeleton = this.renderer.selectRootElement('#map-skeleton', true);

    this.renderer.listen(iframe, 'load', () => {
      this.iframeLoaded = true;
    });
  }
}
