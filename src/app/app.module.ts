import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { KontentComponent } from './kontent/kontent.component';
import { TabDogsComponent } from './tab-dogs/tab-dogs.component';
import { ChatComponent } from './chat/chat.component';
import { NotifListComponent } from './notif-list/notif-list.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';
import { TabCatsComponent } from './tab-cats/tab-cats.component';
import { TabTravelComponent } from './tab-travel/tab-travel.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KontentComponent,
    TabDogsComponent,
    ChatComponent,
    NotifListComponent,
    LoginComponent,
    LogoutComponent,
    TabCatsComponent,
    TabTravelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
