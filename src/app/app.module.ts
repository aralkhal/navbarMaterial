import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatTabsModule } from '@angular/material/tabs'
// import { FormsModule } from '@angular/forms'
import { SubMenueComponent } from './sub-menue/sub-menue.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TabsComponent } from './main-menu/tabs/tabs.component';
import { DashboardComponent } from './main-menu/tabs/dashboard/dashboard.component';
import { OrdersComponent } from './main-menu/tabs/orders/orders.component'

@NgModule({
  declarations: [
    AppComponent,
    SubMenueComponent,
    MainMenuComponent,
    TabsComponent,
    DashboardComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
