import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';

import {ExampleCodeModule} from '../../@components/example-code';
import {ExampleModal} from './example/example.modal';
import {ModalSizingPage} from './modal-sizing.page';
import {ModalSizingRoutingModule} from './modal-sizing-routing.module';


@NgModule({
  declarations: [ModalSizingPage, ExampleModal],
  imports: [
    CommonModule,
    ModalSizingRoutingModule,
    ModalsModule,
    ExampleCodeModule
  ]
})
export class ModalSizingModule {
}
