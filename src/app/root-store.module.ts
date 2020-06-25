
import { NgModule } from '@angular/core';
 
import { StoreModule } from '@ngrx/store';
import * as fromRoot  from './user.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot( 
      { app: fromRoot.userReducer },
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }) ,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Starter App',

      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    })
  ], 
})
export class RootStoreModule { }
