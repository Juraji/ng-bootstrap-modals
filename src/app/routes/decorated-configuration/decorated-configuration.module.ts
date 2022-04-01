import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';

import {ExampleCodeModule} from '../../@components/example-code';
import {DecoratedConfigurationPage} from './decorated-configuration.page';
import {DecoratedConfigurationRoutingModule} from './decorated-configuration-routing.module';
import {ExampleModal} from './example-modal/example.modal';


@NgModule({
  declarations: [DecoratedConfigurationPage, ExampleModal],
  imports: [
    CommonModule,
    DecoratedConfigurationRoutingModule,
    ExampleCodeModule,
    ModalsModule
  ]
})
export class DecoratedConfigurationModule {
}
