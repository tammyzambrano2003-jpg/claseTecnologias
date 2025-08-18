import { Routes } from '@angular/router';

export const routes: Routes = [
    {
       path: '',
       loadComponent: () => import('./components/componente1/componente1').then(m => m.Componente1),

         
    },
    {
        path: 'componente2',
        loadComponent: () => import('./components/componente2/componente2').then(m => m.Componente2),
    },
    {
        path:'componente3',
        loadComponent: () => import('./components/componente3/componente3').then(m => m.Componente3),                                                                                                                                      
    },

];
