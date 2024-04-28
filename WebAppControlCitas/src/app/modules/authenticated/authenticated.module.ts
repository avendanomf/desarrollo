import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AuthenticatedRoutingModule } from './authenticated-routing.module'
import { AuthenticatedComponent } from './authenticated.component'

import { StSelectComponent } from './shared/st-select/st-select.component'
import { MenuComponent } from './shared/menu/menu.component'
import { PagerComponent } from './shared/pager/pager.component'
import { TopBarComponent } from './shared/top-bar/top-bar.component'
import { FiltersComponent } from './shared/filters/filters.component'

import { MultiSelectDropdownComponent } from '../../components/multi-select-dropdown/multi-select-dropdown.component'
import { ConfirmationDeleteComponent } from '../../components/confirmation-delete/confirmation-delete.component'
import { StInputFileComponent } from '../../components/st-input-file/st-input-file.component'

import { SelectDropDownModule } from 'ngx-select-dropdown'
import { UiModule } from '../../ui/ui.module'
import { ChartDirective } from '../../directives/chartDirective'

import { FormUsersComponent } from './cruds/users/form/form.component'
import { FormPacienteComponent } from './cruds/paciente/form/form.component'
import { FormMedicoComponent } from './cruds/medico/form/form.component'
import { FormCitaMedicaComponent } from './cruds/citamedica/form/form.component'
import { FormServicioComponent } from './cruds/servicio/form/form.component'
import { FormTurnoComponent } from './cruds/turno/form/form.component'
import { FormHistoriaClinicaComponent } from './cruds/historiaclinica/form/form.component'

import { HomeComponent } from './cruds/home/home.component'
import { CardStatusComponent } from './cruds/home/card-status/card-status.component'
import { UsersComponent } from './cruds/users/users.component'
import { PacienteComponent } from './cruds/paciente/paciente.component'
import { MedicoComponent } from './cruds/medico/medico.component'
import { ServicioComponent } from './cruds/servicio/servicio.component'
import { TurnoComponent } from './cruds/turno/turno.component'
import { CitaMedicaComponent } from './cruds/citamedica/citamedica.component'
import { HistoriaClinicaComponent } from './cruds/historiaclinica/historiaclinica.component'

@NgModule({
  declarations: [
    FormUsersComponent,
    FormPacienteComponent,
    FormMedicoComponent,
    FormCitaMedicaComponent,
    FormServicioComponent,
    FormTurnoComponent,
    FormHistoriaClinicaComponent,

    MenuComponent,
    PacienteComponent,
    MedicoComponent,
    ServicioComponent,
    TurnoComponent,
    CitaMedicaComponent,
    HistoriaClinicaComponent,

    AuthenticatedComponent,
    TopBarComponent,
    FiltersComponent,
    UsersComponent,
    MultiSelectDropdownComponent,
    ConfirmationDeleteComponent,
    PagerComponent,
    StSelectComponent,
    StInputFileComponent,
    CardStatusComponent,
    HomeComponent,
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
