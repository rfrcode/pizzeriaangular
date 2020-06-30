import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module'

const LOGINVALIDATOR = { attribute: 'name', fnValidator: () => { } }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
  ],
  providers: [{ provide: 'LOGINVALIDATOR', useValue: LOGINVALIDATOR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
