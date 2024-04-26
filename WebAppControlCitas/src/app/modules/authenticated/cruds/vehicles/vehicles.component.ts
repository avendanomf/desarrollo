import { Component } from '@angular/core'
import { FormVehicleComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { ComponentType } from '@angular/cdk/overlay'
import { BaseForm } from '../../base/baseForm'
import { ResponseCrud, User } from '../../interface/crudInterface'
import { URL_API } from '../../../../config/config'

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent extends BaseCrud {
  override path: string = 'vehicle'
  override idField: string = 'vehiculoId'

  override formDialogComponent: ComponentType<BaseForm> = FormVehicleComponent

  override getOptionsLists (): void {
    this.http.get<ResponseCrud>(`${URL_API}user?pageSize=100&rol=Conductor`).subscribe(
      {
        next: (data) => {
          this.optionsList.drivers = data.response.datos.map((x: User) => ({ label: x.nombres, value: x.usuarioId }))
          // this.filters[2].options = this.optionsList.drivers
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
      placeholder: 'Buscar por palabra clave, id, o placa',
      value: '',
      field: 's',
      valueKey: '' // se debe setear aunque no haga nada en el caso del input
    }
  ]

  deleteHandler (item: any): void {
    this.delete('Eliminar vehiculo', `Estas seguro de eliminar el vehiculo con placa "${item.placa}"`, item)
  }
}
