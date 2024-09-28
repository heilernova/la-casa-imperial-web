import { Route } from "@angular/router";

export default [
    { path: "cambios-y-devoluciones", loadComponent: () => import('./changes-and-returns-page/changes-and-returns-page.component').then(x => x.ChangesAndReturnsPageComponent) },
    { path: "privacidad", loadComponent: () => import("./privacy-page/privacy-page.component").then(x => x.PrivacyPageComponent)}
] as Route[];