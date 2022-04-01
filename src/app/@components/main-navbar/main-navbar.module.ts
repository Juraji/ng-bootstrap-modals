import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

import {MainNavbarComponent} from './main-navbar/main-navbar.component';


@NgModule({
  imports: [CommonModule, RouterModule, NgbNavModule],
  declarations: [MainNavbarComponent],
  exports: [MainNavbarComponent]
})
export class MainNavbarModule {
}
