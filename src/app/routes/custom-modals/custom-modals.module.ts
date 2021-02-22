import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomModalsRoutingModule} from './custom-modals-routing.module';
import {CustomModalsPage} from './custom-modals.page';
import { ExampleModal } from './example-modal/example.modal';
import {NgbmodModalsModule} from '@juraji/ng-bootstrap-modals';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {CodeHighlightingModule} from '../../@components/code-highlighting';


@NgModule({
  declarations: [CustomModalsPage, ExampleModal],
  imports: [
    CommonModule,
    CustomModalsRoutingModule,
    NgbmodModalsModule,
    NgbNavModule,
    CodeHighlightingModule
  ]
})
export class CustomModalsModule {
}
