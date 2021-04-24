import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModalSizingPage} from './modal-sizing.page';

const routes: Routes = [{path: '', component: ModalSizingPage}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalSizingRoutingModule {
}
