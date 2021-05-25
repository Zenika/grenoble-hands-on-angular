import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TransferHttpCacheModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
