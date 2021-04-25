import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DropdownModule } from 'primeng/dropdown';
import { WeatheruiComponent } from './weatherui/weatherui.component';
import {UrlApiService} from './url-api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatheruiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     DropdownModule,
     BrowserAnimationsModule,
     HttpClientModule    
  
  ],
  providers: [UrlApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
