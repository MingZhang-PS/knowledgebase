import { NgModule } from '@angular/core';
import { IconModule, PanelModule, ButtonModule,
        BadgeLabelModule, InputGroupModule, ListModule, InfiniteScrollModule } from 'fundamental-ngx';

@NgModule({
  imports: [
    IconModule,
    PanelModule,
    ButtonModule,
    BadgeLabelModule,
    InputGroupModule,
    ListModule,
    InfiniteScrollModule
  ],
  exports: [
    IconModule,
    PanelModule,
    ButtonModule,
    BadgeLabelModule,
    InputGroupModule,
    ListModule,
    InfiniteScrollModule
  ],
})
export class FundamentalModule {}
