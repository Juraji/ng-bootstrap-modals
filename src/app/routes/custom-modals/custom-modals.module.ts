import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

import {ExampleCodeModule} from '../../@components/example-code';
import {CustomModalsPage} from './custom-modals.page';
import {CustomModalsRoutingModule} from './custom-modals-routing.module';
import {ExampleModal} from './example-modal/example.modal';


@NgModule({
  declarations: [CustomModalsPage, ExampleModal],
  imports: [
    CommonModule,
    CustomModalsRoutingModule,
    ModalsModule,
    NgbNavModule,
    ExampleCodeModule
  ]
})
export class CustomModalsModule {
}
