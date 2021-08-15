import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { RootStoreConfig, StoreModule } from "@ngrx/store";
import { CoreDataModule } from '@foreign-contacts/core-data';
import { ContactEffects } from './contacts/effects.contacts';
import { reducers } from '.';

const store_name = 'Contacts Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};



@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([ContactEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})
export class CoreStateModule {}
