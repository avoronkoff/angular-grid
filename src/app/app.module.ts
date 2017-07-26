import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './main/app.component';
import { AppNavbarComponent } from './navbar/app.navbar.component';
import { AppNavpillsComponent } from './navpills/app.navpills.component';
import { AppTabsComponent } from './tabs/app.tabs.component';
import { AppModalComponent } from './modals/modalDropdown/app.modal-dropdown.component';
import { AppModalLogoutComponent } from './modals/modalLogout/app.modal-logout.component';
import { AppTableRowPipe } from './pipes/app.table-row.pipe';

import { AppGridService } from './service/app.grid.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppNavpillsComponent,
    AppTabsComponent,
    AppModalComponent,
    AppModalLogoutComponent,
    AppTableRowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AppGridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
