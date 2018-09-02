import { ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  }
];

export const clientRouter: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
