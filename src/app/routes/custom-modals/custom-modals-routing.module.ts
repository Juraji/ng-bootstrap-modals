import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomModalsPage} from './custom-modals.page';

const routes: Routes = [{ path: '', component: CustomModalsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomModalsRoutingModule { }
