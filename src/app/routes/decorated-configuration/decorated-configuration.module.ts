import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalsModule} from '@juraji/ng-bootstrap-modals';
import {ExampleCodeModule} from '../../@components/example-code';
import {DecoratedConfigurationRoutingModule} from './decorated-configuration-routing.module';
import {DecoratedConfigurationPage} from './decorated-configuration.page';
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
