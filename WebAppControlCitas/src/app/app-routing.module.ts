/* eslint-disable @typescript-eslint/promise-function-async */
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './_services/auth.guard'

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/authenticated/authenticated.module').then(m => m.AuthenticatedModule)
  },
  { path: '*', redirectTo: 'auth' },
  { path: '**', redirectTo: 'error/404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
