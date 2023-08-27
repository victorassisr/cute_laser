import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MelhorEnvioComponent } from './melhor-envio.component';

const routes: Routes = [{ path: '', component: MelhorEnvioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MelhorEnvioRoutingModule { }
