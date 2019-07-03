
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { KbSearchComponent } from './components/kb-search/kb-search.component';
import { KbItemComponent } from './components/kb-item/kb-item.component';
import { KbListComponent } from './components/kb-list/kb-list.component';
import { KbDetailComponent } from './components/kb-detail/kb-detail.component';
import { KbContainerComponent } from './components/kb-container/kb-container.component';
import { KnowledgeBaseEffects } from './effects/knowledgeBase.effect';
import { KnowledgeBaseFacade } from './facades/knowledgeBase.facade';
import { KnowlegdeBaseArticleService } from './services/knowlegdeBaseArticle.service';
import { KBReducer } from './reducers/knowledgeBaseArticle.reducer';
import { FEATURE_NAME } from './shared/consts';

import { FundamentalModule } from './fiori-fundamental/fundamental.module';

const COMPONENTS = [
  KbSearchComponent,
  KbItemComponent,
  KbListComponent,
  KbDetailComponent,
  KbContainerComponent
];

@NgModule({
  imports: [
    CommonModule,
    FundamentalModule,
    HttpClientModule,
    StoreModule.forFeature(FEATURE_NAME, KBReducer),
    EffectsModule.forFeature([KnowledgeBaseEffects])
  ],
  exports: COMPONENTS,
  providers: [ KnowledgeBaseFacade, KnowlegdeBaseArticleService ],
  declarations: COMPONENTS
})
export class KbModule { }
