import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from './shared/menu/menu.component'
import { DriversComponent } from './cruds/drivers/drivers.component'
import { VehiclesComponent } from './cruds/vehicles/vehicles.component'
import { AuthenticatedComponent } from './authenticated.component'
import { AuthenticatedRoutingModule } from './authenticated-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { TopBarComponent } from './shared/top-bar/top-bar.component'
import { FormDriverComponent } from './cruds/drivers/form/form.component'
import { FormVehicleComponent } from './cruds/vehicles/form/form.component'
import { UsersComponent } from './cruds/users/users.component'
import { FormUsersComponent } from './cruds/users/form/form.component'
import { PagerComponent } from './shared/pager/pager.component'
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { StSelectComponent } from './shared/st-select/st-select.component'
import { SuppliersComponent } from './cruds/suppliers/suppliers.component'
import { FormSuppliersComponent } from './cruds/suppliers/form/form.component'
import { CustomersComponent } from './cruds/customers/customers.component'
import { FormCustomersComponent } from './cruds/customers/form/form.component'
import { ProductsComponent } from './cruds/products/products.component'
import { FormProductsComponent } from './cruds/products/form/form.component'
import { MaintenanceComponent } from './cruds/maintenance/maintenance.component'
import { FormMaintenanceComponent } from './cruds/maintenance/form/form.component'
import { OrdersComponent } from './cruds/orders/orders.component'
import { ProjectsComponent } from './cruds/projects/projects.component'
import { FormProjectsComponent } from './cruds/projects/form/form.component'
import { RequestComponent } from './cruds/request/request.component'
import { FormRequestComponent } from './cruds/request/form/form.component'
import { ServiceItemComponent } from './cruds/request/form/service-item/service-item.component'
import { CardStatusComponent } from './cruds/home/card-status/card-status.component'
import { HomeComponent } from './cruds/home/home.component'
import { FiltersComponent } from './shared/filters/filters.component'
import { MultiSelectDropdownComponent } from '../../components/multi-select-dropdown/multi-select-dropdown.component'
import { ConfirmationDeleteComponent } from '../../components/confirmation-delete/confirmation-delete.component'
import { StInputFileComponent } from '../../components/st-input-file/st-input-file.component'
import { OrderFormComponent } from './cruds/request/form/order-form/order-form.component'
import { UiModule } from '../../ui/ui.module'
import { ChartDirective } from '../../directives/chartDirective'
import { ReportsComponent } from './cruds/reports/reports.component'
import { ReportFormComponent } from './cruds/reports/form/form.component'

@NgModule({
  declarations: [
    MenuComponent,
    DriversComponent,
    VehiclesComponent,
    AuthenticatedComponent,
    TopBarComponent,
    FiltersComponent,
    FormDriverComponent,
    FormVehicleComponent,
    UsersComponent,
    FormUsersComponent,
    MultiSelectDropdownComponent,
    ConfirmationDeleteComponent,
    PagerComponent,
    StSelectComponent,
    StInputFileComponent,
    SuppliersComponent,
    FormSuppliersComponent,
    CustomersComponent,
    FormCustomersComponent,
    ProductsComponent,
    FormProductsComponent,
    ReportFormComponent,
    MaintenanceComponent,
    FormMaintenanceComponent,
    OrdersComponent,
    ProjectsComponent,
    FormProjectsComponent,
    RequestComponent,
    FormRequestComponent,
    OrderFormComponent,
    CardStatusComponent,
    ServiceItemComponent,
    HomeComponent,
    ReportsComponent,
    ChartDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AuthenticatedRoutingModule,
    SelectDropDownModule,
    UiModule
  ]
})
export class AuthenticatedModule { }
