import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaidLinkComponent } from './components/plaid-link/plaid-link.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppSettingsProviders } from './app.settings';

@NgModule({
    declarations: [AppComponent, PlaidLinkComponent, SideBarComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgxPlaidLinkModule],
    providers: [AppSettingsProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
