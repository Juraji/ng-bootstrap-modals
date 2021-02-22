import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfirmModalRoutingModule} from './confirm-modal-routing.module';
import {ConfirmModalPage} from './confirm-modal/confirm-modal.page';
import {NgbmodModalsModule} from '@juraji/ng-bootstrap-modals';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {CodeHighlightingModule} from '../../@components/code-highlighting';


@NgModule({
  declarations: [ConfirmModalPage],
  imports: [
    CommonModule,
    ConfirmModalRoutingModule,
    NgbmodModalsModule,
    NgbNavModule,
    CodeHighlightingModule
  ]
})
export class ConfirmModalModule {
}
