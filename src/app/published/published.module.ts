import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishedRoutingModule } from './published-routing.module';
import { PublishedComponent } from './published.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    PublishedRoutingModule,
    SharedModule
  ],
  declarations: [PublishedComponent]
})
export class PublishedModule { }
