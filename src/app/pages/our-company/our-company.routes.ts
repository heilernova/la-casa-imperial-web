import { Route } from "@angular/router";

export default [
    { path: "quienes-somos", loadComponent: () => import('./about-us/about-us.component').then(x => x.AboutUsComponent) },
    { path: "nuestra-tienda", loadComponent: () => import('./our-store/our-store.component').then(x => x.OurStoreComponent) }
] as Route[]