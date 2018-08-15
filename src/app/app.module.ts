import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),
    AppRoutingModule,
    DataTablesModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
