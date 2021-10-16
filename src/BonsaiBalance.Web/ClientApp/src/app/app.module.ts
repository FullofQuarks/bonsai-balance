import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaidLinkComponent } from './components/plaid-link/plaid-link.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
    declarations: [AppComponent, PlaidLinkComponent, SideBarComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgxPlaidLinkModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
