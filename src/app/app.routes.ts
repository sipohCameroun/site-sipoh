import { Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },
    
    {
        path: 'about',
        component: AProposComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
    
    
];
