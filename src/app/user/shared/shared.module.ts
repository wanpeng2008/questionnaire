import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FieldComponent } from './field/field.component';
import {CoreModule} from "../../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AlertModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModule,
    CoreModule
  ],
  declarations: [RegisterComponent, LoginComponent, FieldComponent],
  exports: [LoginComponent]
})
export class SharedModule { }
