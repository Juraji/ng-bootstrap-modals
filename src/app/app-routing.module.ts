import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-modal',
    loadChildren: () => import('./routes/custom-modals/custom-modals.module').then(m => m.CustomModalsModule)
  },
  {
    path: 'confirm-modal',
    loadChildren: () => import('./routes/confirm-modal/confirm-modal.module').then(m => m.ConfirmModalModule)
  },
  {
    path: '**',
    redirectTo: 'custom-modal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
