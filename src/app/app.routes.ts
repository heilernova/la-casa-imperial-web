import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'politicas', loadChildren: () => import('./pages/policies/policies.routes').then(x => x) },
    { path: "nuestra-compania", loadChildren: () => import('./pages/our-company/our-company.routes') },
];
