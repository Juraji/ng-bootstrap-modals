import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';

import {ModalSizingRoutingModule} from './modal-sizing-routing.module';
import {ModalSizingPage} from './modal-sizing.page';
import {ExampleModal} from './example/example.modal';
import {ExampleCodeModule} from '../../@components/example-code';


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
