import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import {AccordionModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    AccordionModule.forRoot()
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
