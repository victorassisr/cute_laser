import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MelhorEnvioRoutingModule } from './melhor-envio-routing.module';
import { MelhorEnvioComponent } from './melhor-envio.component';


@NgModule({
  declarations: [
    MelhorEnvioComponent
  ],
  imports: [
    CommonModule,
    MelhorEnvioRoutingModule
  ]
})
export class MelhorEnvioModule { }
