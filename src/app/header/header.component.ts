import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeService } from '../theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  isDarkMode: boolean = true;
  isLangDropdownOpen = false;
  currentLang: string;
  
  languages = [
    { code: 'en', name: 'English', flag: 'uk' },
    { code: 'pl', name: 'Polski', flag: 'pl' },
  ];
  constructor(private themeService: ThemeService, private translate: TranslateService) {
    this.currentLang = this.getSavedLanguage();
    translate.setDefaultLang('en');
    translate.use(this.currentLang);
  }


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

  toggleLanguageDropdown(): void {
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  closeLanguageDropdown(): void {
    this.isLangDropdownOpen = false;
  }

  switchLanguage(langCode: string): void {
    if (this.currentLang === langCode) {
      this.closeLanguageDropdown();
      return;
    }
    
    this.currentLang = langCode;
    this.translate.use(langCode);
    this.saveLanguagePreference(langCode);
    this.closeLanguageDropdown();
  }

  getCurrentLanguage(): any {
    return this.languages.find(lang => lang.code === this.currentLang) || this.languages[0];
  }

  private getSavedLanguage(): string {
    try {
      if (typeof localStorage !== 'undefined') {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && this.languages.some(lang => lang.code === savedLang)) {
          return savedLang;
        }
        
        if (typeof navigator !== 'undefined') {
          const browserLang = navigator.language.split('-')[0].toLowerCase();
          if (this.languages.some(lang => lang.code === browserLang)) {
            localStorage.setItem('preferredLanguage', browserLang);
            return browserLang;
          }
        }
      }
    } catch (e) {
      console.warn('Error accessing localStorage or navigator:', e);
    }
    return 'en';
  }

  private saveLanguagePreference(langCode: string): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('preferredLanguage', langCode);
      }
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }
}
