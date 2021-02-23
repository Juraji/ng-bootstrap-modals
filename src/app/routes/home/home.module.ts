import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home/home.page';
import {MarkdownModule} from 'ngx-markdown';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MarkdownModule
  ]
})
export class HomeModule { }
