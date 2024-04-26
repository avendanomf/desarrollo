import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DriversComponent } from './cruds/drivers/drivers.component'
import { VehiclesComponent } from './cruds/vehicles/vehicles.component'
import { AuthenticatedComponent } from './authenticated.component'
import { HomeComponent } from './cruds/home/home.component'
import { UsersComponent } from './cruds/users/users.component'
import { SuppliersComponent } from './cruds/suppliers/suppliers.component'
import { CustomersComponent } from './cruds/customers/customers.component'
import { MaintenanceComponent } from './cruds/maintenance/maintenance.component'
import { OrdersComponent } from './cruds/orders/orders.component'
import { ProjectsComponent } from './cruds/projects/projects.component'
import { RequestComponent } from './cruds/request/request.component'
import { ProductsComponent } from './cruds/products/products.component'
import { ReportsComponent } from './cruds/reports/reports.component'

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
        path: 'vehicles',
        component: VehiclesComponent
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
        path: 'users/drivers',
        component: DriversComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'suppliers',
        component: SuppliersComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'request',
        component: RequestComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
