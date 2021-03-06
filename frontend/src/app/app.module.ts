import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimesComponent } from './primes/primes.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessagesService } from './messages/messages.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    )
  ],
  providers: [
    HttpErrorHandler,
    MessagesService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
