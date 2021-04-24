import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'custom-modal',
    loadChildren: () => import('./routes/custom-modals/custom-modals.module').then(m => m.CustomModalsModule)
  },
  {
    path: 'confirm-modal',
    loadChildren: () => import('./routes/confirm-modal/confirm-modal.module').then(m => m.ConfirmModalModule)
  },
  {
    path: 'shade-modal',
    loadChildren: () => import('./routes/shade-modal/shade-modal.module').then(m => m.ShadeModalModule)
  },
  {
    path: 'modal-sizing',
    loadChildren: () => import('./routes/modal-sizing/modal-sizing.module').then(m => m.ModalSizingModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
