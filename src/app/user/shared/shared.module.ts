import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RegisterComponent, LoginComponent, FieldComponent]
})
export class SharedModule { }
