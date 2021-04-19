import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfirmModalRoutingModule} from './confirm-modal-routing.module';
import {ConfirmModalPage} from './confirm-modal/confirm-modal.page';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {ExampleCodeModule} from '../../@components/example-code';


@NgModule({
  declarations: [ConfirmModalPage],
  imports: [
    CommonModule,
    ConfirmModalRoutingModule,
    ModalsModule,
    NgbNavModule,
    ExampleCodeModule
  ]
})
export class ConfirmModalModule {
}
