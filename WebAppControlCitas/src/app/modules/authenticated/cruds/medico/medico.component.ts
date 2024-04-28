import { Component } from '@angular/core'
import { FormMedicoComponent } from './form/form.component'
import { BaseCrud, baseFilterI } from '../../base/baseCrud'
import { BaseForm } from '../../base/baseForm'
import { ComponentType } from '@angular/cdk/overlay'

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.scss'
})
export class MedicoComponent extends BaseCrud {
  override path: string = 'medico'
  override idField: string = 'idMedico'

  override formDialogComponent: ComponentType<BaseForm> = FormMedicoComponent

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
    this.delete('Eliminar Medico', `Estas seguro de eliminar el medico "${item.nombreCompleto}"`, item)
  }
}
