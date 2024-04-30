import { Component } from '@angular/core'
import { FormServicioComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.scss'
})
export class ServicioComponent extends BaseCrud {
  override path: string = 'servicio'
  override idField: string = 'idServicio'

  override formDialogComponent: ComponentType<BaseForm> = FormServicioComponent

  override filters: baseFilterI[] = [
    {
      type: 'input',
      placeholder: 'Buscar por palabra clave, id, o documento',
      value: '',
      field: 's',
      valueKey: ''
    }
  ]

  deleteHandler(item: any): void {
    this.delete('Eliminar servicio', `Estas seguro de eliminar el servicio "${item.nombreServicio}"`, item)
  }
}
