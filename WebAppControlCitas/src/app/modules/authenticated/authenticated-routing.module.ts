import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthenticatedComponent } from './authenticated.component'
import { HomeComponent } from './cruds/home/home.component'
import { UsersComponent } from './cruds/users/users.component'
import { PacienteComponent } from './cruds/paciente/paciente.component'
import { MedicoComponent } from './cruds/medico/medico.component'
import { CitaMedicaComponent } from './cruds/citamedica/citamedica.component'
import { ServicioComponent } from './cruds/servicio/servicio.component'
import { TurnoComponent } from './cruds/turno/turno.component'
import { HistoriaClinicaComponent } from './cruds/historiaclinica/historiaclinica.component'

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
      },
      {
        path: 'paciente',
        component: PacienteComponent
      },
      {
        path: 'medico',
        component: MedicoComponent
      },
      {
        path: 'citamedica',
        component: CitaMedicaComponent
      },
      {
        path: 'servicio',
        component: ServicioComponent
      },
      {
        path: 'turno',
        component: TurnoComponent
      },
      {
        path: 'historiaclinica',
        component: HistoriaClinicaComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
