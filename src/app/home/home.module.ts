import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CarouselModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
