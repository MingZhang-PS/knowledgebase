import { NgModule } from '@angular/core';
import { IconModule, PanelModule, ButtonModule, BadgeLabelModule, InputGroupModule   } from 'fundamental-ngx';

@NgModule({
  imports: [
    IconModule,
    PanelModule,
    ButtonModule,
    BadgeLabelModule,
    InputGroupModule
  ],
  exports: [
    IconModule,
    PanelModule,
    ButtonModule,
    BadgeLabelModule,
    InputGroupModule
  ],
})
export class FundamentalModule {}
