import { Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio',  component: CoreComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/' }
];
