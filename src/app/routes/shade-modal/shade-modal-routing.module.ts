import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ShadeModalPage} from './shade-modal/shade-modal.page';

const routes: Routes = [{path: '', component: ShadeModalPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShadeModalRoutingModule {
}
