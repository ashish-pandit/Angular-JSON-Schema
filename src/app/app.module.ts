import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRootComponent } from './app-root.component';

import { routes } from './app.routes';
import {
  MaterialDesignFrameworkModule  
} from 'angular6-json-schema-form';

@NgModule({
  declarations: [ AppComponent, AppRootComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule,
    HttpClientModule, MatCardModule,
    RouterModule.forRoot(routes),
    MaterialDesignFrameworkModule,
    
  ],
  bootstrap: [AppRootComponent]
})


export class AppModule { }
