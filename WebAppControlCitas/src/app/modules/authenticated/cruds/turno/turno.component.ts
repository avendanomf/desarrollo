import { Component } from '@angular/core'
import { FormTurnoComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrl: './turno.component.scss'
})
export class TurnoComponent extends BaseCrud {
  override path: string = 'turno'
  override idField: string = 'idTurno'

  override formDialogComponent: ComponentType<BaseForm> = FormTurnoComponent

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
    this.delete('Eliminar Turno', `Estas seguro de eliminar el turno "${item.idTurno}"`, item)
  }
}
