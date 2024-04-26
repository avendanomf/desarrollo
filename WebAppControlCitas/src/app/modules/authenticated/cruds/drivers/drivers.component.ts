import { Component } from '@angular/core'
import { FormDriverComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { ComponentType } from '@angular/cdk/overlay'
import { BaseForm } from '../../base/baseForm'
import { ResponseCrud, User } from '../../interface/crudInterface'
import { URL_API } from '../../../../config/config'

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent extends BaseCrud {
  override path: string = 'driver'
  override idField: string = 'conductorId'

  override formDialogComponent: ComponentType<BaseForm> = FormDriverComponent

  override getOptionsLists (): void {
    this.http.get<ResponseCrud>(`${URL_API}user?pageSize=100&rol=Conductor`).subscribe(
      {
        next: (data) => {
          this.optionsList.users = data.response.datos.map((x: User) => ({ label: x.nombres, value: x.usuarioId }))
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

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave, id, o documento',
      value: '',
      field: 's',
      valueKey: '' // se debe setear aunque no haga nada en el caso del input
    }
  ]

  deleteHandler (item: any): void {
    this.delete('Eliminar conductor', `Estas seguro de eliminar el conducto con nombre "${item.usuario.nombres}"`, item)
  }
}
