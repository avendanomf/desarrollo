import { Component } from '@angular/core'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { ComponentType } from '@angular/cdk/overlay'
import { BaseForm } from '../../base/baseForm'
import { Customer, Project, ResponseCrud } from '../../interface/crudInterface'
import { FormRequestComponent } from './form/form.component'
import { Product } from '../suppliers/suppliers.component'
import { URL_API } from '../../../../config/config'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent extends BaseCrud {
  override path: string = 'request'
  override idField: string = 'solicitudesId'

  override formDialogComponent: ComponentType<BaseForm> = FormRequestComponent

  override getOptionsLists (): void {
    this.http.get<ResponseCrud>(`${URL_API}customer?pageSize=100`).subscribe(
      {
        next: (data) => {
          this.optionsList.customers = data.response.datos.map((x: Customer) => ({ label: x.nombre, value: x.clienteId }))
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

    this.http.get<ResponseCrud>(`${URL_API}project?pageSize=100`).subscribe(
      {
        next: (data) => {
          this.optionsList.projects = data.response.datos.map((x: Project) => ({ label: x.nombre, value: x.proyectoId }))
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

    this.http.get<ResponseCrud>(`${URL_API}product?pageSize=500`).subscribe(
      {
        next: (data) => {
          this.optionsList.productsSM = data.response.datos.filter(x => x.categoria === 'Suministro').map((x: Product) => ({ label: x.nombre, value: x.productoId, uMedida: x.uMedida }))
          this.optionsList.productsRCD = data.response.datos.filter(x => x.categoria === 'Recolección de residuos').map((x: Product) => ({ label: x.nombre, value: x.productoId, uMedida: x.uMedida }))
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
    this.delete('Eliminar solicitud', `Estas seguro de eliminar el solicitud con id "${item.solicitudesId}"`, item)
  }
}
