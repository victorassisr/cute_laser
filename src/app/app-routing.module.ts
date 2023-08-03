import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: 'personalized', loadChildren: () => import('./views/personalized/personalized.module').then(m => m.PersonalizedModule) },
  { path: 'about', loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule) },
  { path: 'invoice', loadChildren: () => import('./views/invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: '**', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }