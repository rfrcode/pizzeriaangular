import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginserviceService } from './loginservice.service'
import { CoreModule } from '../core/core.module'
import { ValidatorsModule } from '../validators/validators.module'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    ValidatorsModule
  ],
  providers: [LoginserviceService]
})
export class LoginModule { }
