import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ConfirmModalPage} from './confirm-modal/confirm-modal.page';

const routes: Routes = [{path: '', component: ConfirmModalPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmModalRoutingModule {
}
