import { ActionReducerMap, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from 'src/environments/environment';
import { KBState } from './states/knowledgeBaseArticle.state';
import { KBReducer } from './reducers/knowledgeBaseArticle.reducer';

export interface IState {
    knowledgebase: KBState;
}

export const ROOT_REDUCERS: ActionReducerMap<IState> = {
    knowledgebase: KBReducer
};

export function logger(reducer: ActionReducer<IState>): any {
    // default, no options
    return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];
