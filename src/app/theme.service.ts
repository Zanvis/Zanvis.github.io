import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private darkMode = new BehaviorSubject<boolean>(true); // Default to dark mode
    isDarkMode$ = this.darkMode.asObservable();

    constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
        this.darkMode.next(this.getInitialTheme());
    }
    this.setInitialTheme();
}

private getInitialTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
        const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
}

private setInitialTheme() {
    if (this.darkMode.value) {
        this.document.documentElement.classList.add('dark');
    } else {
        this.document.documentElement.classList.remove('dark');
    }
}

toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value);
    this.updateTheme();
}

private updateTheme() {
    if (this.darkMode.value) {
        this.document.documentElement.classList.add('dark');
    } else {
        this.document.documentElement.classList.remove('dark');
    }
        
    if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('theme', this.darkMode.value ? 'dark' : 'light');
        }
    }
}