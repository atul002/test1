import { Routes } from '@angular/router';
import { Child } from './child/child';
import { Home } from './home/home';

export const routes: Routes = [    
    {path: '', component: Home},
    { path: 'child', component: Child }
];
