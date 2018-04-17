import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { AppErrorHandler } from './app-error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService, DataService, { provide: ErrorHandler, useClass: AppErrorHandler } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
