import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DecoratedConfigurationPage} from './decorated-configuration.page';

const routes: Routes = [{path: '', component: DecoratedConfigurationPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoratedConfigurationRoutingModule {
}
