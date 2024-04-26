import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthenticatedComponent } from './authenticated.component'
import { HomeComponent } from './cruds/home/home.component'
import { UsersComponent } from './cruds/users/users.component'

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'users/all',
        component: UsersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
