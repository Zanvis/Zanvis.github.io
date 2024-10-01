import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  isDarkMode: boolean = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe(
      isDarkMode => this.isDarkMode = isDarkMode
    );
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
  toggleMenu(): void{
    this.isOpen = !this.isOpen;
  }
  
  closeMenu() {
    this.isOpen = false;
  }
}
