import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShadeModalRoutingModule} from './shade-modal-routing.module';
import {ShadeModalPage} from './shade-modal/shade-modal.page';
import {NgbmodModalsModule} from '@juraji/ng-bootstrap-modals';
import {ExampleCodeModule} from '../../@components/example-code';


@NgModule({
  declarations: [ShadeModalPage],
  imports: [
    CommonModule,
    ShadeModalRoutingModule,
    ExampleCodeModule,
    NgbmodModalsModule
  ]
})
export class ShadeModalModule { }
