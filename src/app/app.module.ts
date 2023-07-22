import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchInfoComponent } from './match-info/match-info.component';
import { SortPipe } from './sort.pipe';
import { FormsModule } from '@angular/forms';
import { MarketComponent } from './market/market.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchInfoComponent,
    SortPipe,
    MarketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
