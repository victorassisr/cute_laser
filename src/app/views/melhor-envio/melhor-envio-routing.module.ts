import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MelhorEnvioComponent } from './melhor-envio.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'auth', component: MelhorEnvioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MelhorEnvioRoutingModule { }
