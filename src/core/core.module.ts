import { NgModule }         from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
          MatButtonModule,
          MatCardModule,
          MatMenuModule,
          MatToolbarModule,
          MatIconModule,
          MatSidenavModule,
          MatListModule
       } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule

  ],
  declarations: [],
  providers: []

})

export class CoreModule {}
