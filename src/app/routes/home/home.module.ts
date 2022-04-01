import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MarkdownModule} from 'ngx-markdown';

import { HomePage } from './home/home.page';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MarkdownModule
  ]
})
export class HomeModule { }
