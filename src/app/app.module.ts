import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KbModule } from './kb.module';
import { ROOT_REDUCERS, metaReducers } from './app-state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {metaReducers}),
    EffectsModule.forRoot([]),
    KbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
