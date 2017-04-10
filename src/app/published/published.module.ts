import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishedRoutingModule } from './published-routing.module';
import { PublishedComponent } from './published.component';

@NgModule({
  imports: [
    CommonModule,
    PublishedRoutingModule
  ],
  declarations: [PublishedComponent]
})
export class PublishedModule { }
