import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomModalsRoutingModule} from './custom-modals-routing.module';
import {CustomModalsPage} from './custom-modals.page';
import {ExampleModal} from './example-modal/example.modal';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {ExampleCodeModule} from '../../@components/example-code';


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
