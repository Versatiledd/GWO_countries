import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContinentsComponent } from './continents/continents.component';

import { countryService } from './country-list/countryService';
import { TestComponent } from './test/test.component';
import { CountryListComponent } from './country-list/country-list.component';

import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContinentsComponent,
    TestComponent,
    CountryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
  providers: [countryService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
