import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'child',
        loadComponent: () => import('./child/child').then(c => c.Child),
        children: [
            {
                path: 'detail',
                loadComponent: () => import('./child/child-detail/child-detail')
                    .then(c => c.ChildDetail)
            },
            { path: '', redirectTo: '', pathMatch: 'full' } // optional default
        ]
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home').then(m => m.Home)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    // Wildcard route
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
