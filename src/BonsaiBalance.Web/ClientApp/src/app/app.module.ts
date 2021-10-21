import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { PlaidLinkComponent } from './components/plaid-link/plaid-link.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, PlaidLinkComponent, SideBarComponent, DashboardContainerComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPlaidLinkModule,
        NgxChartsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
