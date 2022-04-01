import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';

import {ExampleCodeModule} from '../../@components/example-code';
import {ShadeModalPage} from './shade-modal/shade-modal.page';
import {ShadeModalRoutingModule} from './shade-modal-routing.module';


@NgModule({
  declarations: [ShadeModalPage],
  imports: [
    CommonModule,
    ShadeModalRoutingModule,
    ExampleCodeModule,
    ModalsModule
  ]
})
export class ShadeModalModule { }
