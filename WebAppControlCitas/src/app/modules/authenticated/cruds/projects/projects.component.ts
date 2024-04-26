import { Component } from '@angular/core'
import { FormProjectsComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'
import { Customer, ResponseCrud, User } from '../../interface/crudInterface'
import { URL_API } from '../../../../config/config'
// import { URL_API } from 'src/app/config/config'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends BaseCrud {
  override path: string = 'project'
  override idField: string = 'proyectoId'

  override formDialogComponent: ComponentType<BaseForm> = FormProjectsComponent

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave, id',
      value: '',
      field: 's',
      valueKey: '' // se debe setear aunque no haga nada en el caso del input
    }
  ]

  override getOptionsLists (): void {
    this.http.get<ResponseCrud>(`${URL_API}customer?pageSize=100`).subscribe(
      {
        next: (data: any) => {
          this.optionsList.customers = data.response.datos.map((x: Customer) => ({ label: x.nombre, value: x.clienteId }))
          // this.filters[1].options = this.optionsList.customers
        },
        error: (e) => {
          this.errorAlert = true
          this.errorText = e.message
        },
        complete: () => {
          this.load = false
        }
      }
    )

    this.http.get<ResponseCrud>(`${URL_API}user?pageSize=100&rol=Supervisor`).subscribe(
      {
        next: (data) => {
          this.optionsList.supervisors = data.response.datos.map((x: User) => ({ label: x.nombres, value: x.usuarioId }))
          // this.filters[2].options = this.optionsList.supervisors
        },
        error: (e) => {
          this.errorAlert = true
          this.errorText = e.message
        },
        complete: () => {
          this.load = false
        }
      }
    )
  }

  deleteHandler (item: any): void {
    this.delete('Eliminar proyecto', `Estas seguro de eliminar el proyecto "${item.nombre}"`, item)
  }
}
